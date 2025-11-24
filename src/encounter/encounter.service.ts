import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Encounter } from './entities/encounter.entity';
import { Combatant } from 'src/combatant/entities/combatant.entities';
import { CreateCombatantDto } from 'src/combatant/dto/create-combatant.dto';
import { UpdateHpDto } from 'src/combatant/dto/update-hp.dto';

@Injectable()
export class EncounterService {
  constructor(
    @InjectRepository(Encounter)
    private readonly encountersRepository: Repository<Encounter>,
    @InjectRepository(Combatant)
    private readonly combatantsRepository: Repository<Combatant>,
  ) {}

  async create(createEncounterDto: CreateEncounterDto): Promise<Encounter> {
    const encounter = this.encountersRepository.create(createEncounterDto as Partial<Encounter>);
    return this.encountersRepository.save(encounter);
  }

  async addCombatant(encounterId: number, combatantDto: CreateCombatantDto): Promise<Combatant> {
    const encounter = await this.encountersRepository.findOne({ where: { id: encounterId } });
    if (!encounter) {
      throw new Error(`Encounter #${encounterId} not found`);
    }
    const combatant = this.combatantsRepository.create({ ...combatantDto, encounter });

    return this.combatantsRepository.save(combatant);
  }

  async getEncounter(encounterId: number): Promise<Encounter> {
      const encounter = await this.encountersRepository.findOne({
      where: { id: encounterId },
      relations: ['combatants', 'combatants.monster', 'combatants.adventurer'],
      order: { combatants: { initiative: 'DESC' } },
    });

    if (!encounter) throw new NotFoundException('Combat not found');

    return encounter;
  }

  async updateHp(combatantId: number, dto: UpdateHpDto): Promise<Combatant> {
    const combatant = await this.combatantsRepository.findOne({
      where: { id: combatantId },
    });

    if (!combatant) throw new NotFoundException('Combatant not found');

    // Apply damage resistances and immunities for monsters
    if (combatant.isMonster && dto.hpChange < 0 && dto.damageType) {
      if(combatant.monster?.damageResistances) {
        combatant.monster?.damageResistances?.forEach((resistance) => {
          if (resistance.name === dto.damageType) {
            dto.hpChange = Math.ceil(dto.hpChange / 2);
          }
        });
      }

      if (combatant.monster?.damageImmunities) {
        combatant.monster?.damageImmunities?.forEach((immunity) => {
          if (immunity.name === dto.damageType) {
            dto.hpChange = 0;
          }
        });
      }
    }

    combatant.currentHp += dto.hpChange;

    if (combatant.currentHp < 0) combatant.currentHp = 0;
    if (combatant.currentHp === 0) combatant.isDead = true;
    if (combatant.currentHp > combatant.maxHp) combatant.currentHp = combatant.maxHp;

    return this.combatantsRepository.save(combatant);
  }

  async nextTurn(encounterId: number): Promise<Encounter> {
    const combat = await this.getEncounter(encounterId);

    if (!combat.turn) combat.turn = 1;

    combat.turn++;

    return this.combatantsRepository.save(combat);
  }
}
