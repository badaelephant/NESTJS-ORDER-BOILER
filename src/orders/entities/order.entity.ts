import { type } from 'os';
import { Delivery } from 'src/deliveries/entities/delivery.entity';
import { Member } from 'src/members/entities/member.entity';
import { OrderItem } from 'src/order-items/entities/order-item.entity';

import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderStatus } from '../enum/order-status.enum';

@Entity('orders')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Member, (member) => member.orders)
  member: Member;

  @OneToMany((type) => OrderItem, (orderItem) => orderItem.order, {
    cascade: true,
  })
  orderItems: OrderItem;

  @OneToOne((type) => Delivery, (delivery) => delivery.order, { cascade: true })
  delivery: Delivery;

  @Column('date', { default: new Date() })
  orderDate: Date;

  @Column('char', { default: OrderStatus.ORDER })
  status: OrderStatus;
}
