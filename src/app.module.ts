import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';

import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { MembersModule } from './members/members.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { Item } from './items/entities/item.entity';
import { Member } from './members/entities/member.entity';
import { Order } from './orders/entities/order.entity';
import { Delivery } from './deliveries/entities/delivery.entity';
import { OrderItem } from './order-items/entities/order-item.entity';
import { Category } from './categories/entities/category.entity';
import { Address } from './common/address.vo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: '1234',
      port: 5432,
      database: 'orders',
      synchronize: true,
      entities: [Member, Order, Delivery, OrderItem, Item, Category],
    }),
    OrdersModule,
    OrderItemsModule,
    CategoriesModule,
    ItemsModule,

    DeliveriesModule,

    MembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
