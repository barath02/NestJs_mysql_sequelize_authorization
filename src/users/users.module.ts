import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret:'secret',
      signOptions : {expiresIn: '1d'}
    })
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports:[SequelizeModule]
})
export class UsersModule {}