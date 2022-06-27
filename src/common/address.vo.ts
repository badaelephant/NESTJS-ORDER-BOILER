import { Injectable } from '@nestjs/common';
import { Column } from 'typeorm';

@Injectable()
export class Address {
  @Column()
  city: string;
  @Column()
  street: string;
  @Column()
  zipcode: string;
}
