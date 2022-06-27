import { type } from 'os';
import { Item } from 'src/items/entities/item.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Item, (item) => item.categories)
  items: Item[];

  @ManyToOne((type) => Category, (category) => category.children)
  parent: Category;

  @OneToMany((type) => Category, (category) => category.parent)
  children: Category[];
}
