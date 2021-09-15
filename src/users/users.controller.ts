import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Res, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private jwtService: JwtService
  ) { }

  @Post('post')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const firstName = createUserDto.firstName;
    const lastName = createUserDto.lastName;
    const mobileNumber = createUserDto.mobileNumber;
    const email = createUserDto.email;
    const Password = createUserDto.Password;

    const hashedPassword = await bcrypt.hash(Password, 12);

    const user = await this.usersService.create({
      firstName,
      lastName,
      mobileNumber,
      email,
      Password: hashedPassword
    });

    delete user.Password;

    return user;
  }

  @Get('get')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }

  @Post('login')
  async login(
    @Body('email') email:string,
    @Body('password') password:string,
    @Res({ passthrough: true }) response: Response
  ) {
    // const email = createUserDto.email;
    // const password = createUserDto.Password;
    //  console.log(password)
    //  console.log(email)
     

    const user = await this.usersService.findOneByEmail( email );
    console.log(user.Password)
    console.log(user.email)
    if (!user) {
      throw new BadRequestException('invalid credentials email');
    }
    if (!await bcrypt.compare(password, user.Password )) {
      throw new BadRequestException('invalid credentials password');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, { httpOnly: true });

    return user;
  }
}
