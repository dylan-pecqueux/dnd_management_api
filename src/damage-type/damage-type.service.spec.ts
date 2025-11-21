import { Test, TestingModule } from '@nestjs/testing';
import { DamageTypeService } from './damage-type.service';

describe('DamageTypeService', () => {
  let service: DamageTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DamageTypeService],
    }).compile();

    service = module.get<DamageTypeService>(DamageTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
