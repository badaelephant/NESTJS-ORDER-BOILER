import { type } from 'os';
import { Order } from 'src/orders/entities/order.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DeliveryStatus } from '../enum/delivery-status.enum';
import { Address } from '../../common/address.vo';

@Entity('deliveries')
export class Delivery extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Order, (order) => order.delivery)
  order: Order;

  @Column(() => Address)
  address: Address;

  @Column('char', { default: DeliveryStatus.READY })
  status: DeliveryStatus;
}
