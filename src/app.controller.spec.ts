import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { Delivery } from './deliveries/entities/delivery.entity';
import { Item } from './items/entities/item.entity';
import { ItemsModule } from './items/items.module';
import { Member } from './members/entities/member.entity';
import { MembersModule } from './members/members.module';
import { OrderItem } from './order-items/entities/order-item.entity';
import { OrderItemsModule } from './order-items/order-items.module';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
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
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
