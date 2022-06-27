import { type } from 'os';
import { Address } from 'src/common/address.vo';
import { Order } from 'src/orders/entities/order.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('members')
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column((type) => Address)
  address: Address;

  @OneToMany((type) => Order, (order) => order.member)
  orders: Order[];
}
