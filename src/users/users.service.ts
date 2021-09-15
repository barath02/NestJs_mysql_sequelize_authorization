import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(

    @InjectModel(User)
    private readonly userModel: typeof User,
    
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.Password =  createUserDto.Password;
    user.mobileNumber = createUserDto.mobileNumber;
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

   findOneByEmail(email: string): Promise<User> {
    return  this.userModel.findOne<User>({ where: { email } });
}


  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async findUserEmail(condition: any): Promise<User> {
    return this.userModel.findOne(condition);
  }
  
}