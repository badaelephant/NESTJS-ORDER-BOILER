import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
const mockMemberRepository = {
  findOne: jest.fn(),
};
describe('MembersController', () => {
  let controller: MembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembersController],
      providers: [
        MembersService,
        { provide: getRepositoryToken(Member), useValue: mockMemberRepository },
      ],
    }).compile();

    controller = module.get<MembersController>(MembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
