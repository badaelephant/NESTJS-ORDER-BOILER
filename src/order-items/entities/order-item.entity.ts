import { type } from 'os';
import { Item } from 'src/items/entities/item.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orderItems')
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Item, (item) => item.orderItems)
  item: Item;

  @ManyToOne((type) => Order, (order) => order.orderItems)
  order: Order;

  @Column('int', { default: 0 })
  orderPrice: number;

  @Column('int', { default: 1 })
  count: number;
}
