import { Test, TestingModule } from '@nestjs/testing';
import { AdventurerController } from './adventurer.controller';
import { AdventurerService } from './adventurer.service';

describe('AdventurerController', () => {
  let controller: AdventurerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdventurerController],
      providers: [AdventurerService],
    }).compile();

    controller = module.get<AdventurerController>(AdventurerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
