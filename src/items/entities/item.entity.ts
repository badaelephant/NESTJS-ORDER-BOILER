import { type } from 'os';
import { Category } from 'src/categories/entities/category.entity';
import { OrderItem } from 'src/order-items/entities/order-item.entity';
import {
  BaseEntity,
  ChildEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity('items')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('int', { default: 0 })
  price: number;

  @Column('int', { default: 1 })
  stockQuantity: number;

  @OneToMany((type) => OrderItem, (orderItem) => orderItem.item)
  orderItems: OrderItem[];

  @ManyToMany((type) => Category, (category) => category.items)
  @JoinTable()
  categories: Category[];
}

@ChildEntity('album')
export class Album extends Item {
  @Column()
  artist: string;
  @Column()
  etc: string;
}
@ChildEntity('book')
export class Book extends Item {
  @Column()
  author: string;
  @Column()
  isbn: number;
}
@ChildEntity('movie')
export class Movie extends Item {
  @Column()
  director: string;
  @Column()
  actor: string;
}
