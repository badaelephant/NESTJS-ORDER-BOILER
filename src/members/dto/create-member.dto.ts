import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsString()
  city: string;
  @IsString()
  street: string;
  @IsString()
  zipcode: string;
}
