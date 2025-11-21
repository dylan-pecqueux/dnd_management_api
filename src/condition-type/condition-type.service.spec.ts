import { Test, TestingModule } from '@nestjs/testing';
import { ConditionTypeService } from './condition-type.service';

describe('ConditionTypeService', () => {
  let service: ConditionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConditionTypeService],
    }).compile();

    service = module.get<ConditionTypeService>(ConditionTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
