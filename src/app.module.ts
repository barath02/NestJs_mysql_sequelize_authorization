import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root@123',
      database: 'MyDB',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
      
    }),
    UsersModule,
  ],
  providers: [AppService],
})
export class AppModule {}