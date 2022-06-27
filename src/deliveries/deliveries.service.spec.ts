import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/members/entities/member.entity';
import { DeliveriesService } from './deliveries.service';

describe('DeliveriesService', () => {
  let service: DeliveriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveriesService],
    }).compile();

    service = module.get<DeliveriesService>(DeliveriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
