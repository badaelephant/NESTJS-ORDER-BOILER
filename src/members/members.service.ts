import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member) private memberRepository: Repository<Member>,
  ) {}
  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const member = await this.memberRepository.findOne({
      where: { name: createMemberDto.name },
    });
    if (member) {
      throw new ConflictException('The Member with same name already exists');
    }
    return this.memberRepository.create(createMemberDto).save();
  }

  findAll() {
    return this.memberRepository.find();
  }

  findOne(id: number) {
    return this.memberRepository.findOneBy({ id });
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    const member = await this.memberRepository.findOneBy({ id });
    const { name, city, zipcode, street } = updateMemberDto;
    if (name) member.name = name;
    if (city) member.address.city = city;
    if (zipcode) member.address.zipcode = zipcode;
    if (street) member.address.street = street;
    return member.save();
  }

  remove(id: number) {
    return this.memberRepository.delete({ id });
  }
}
