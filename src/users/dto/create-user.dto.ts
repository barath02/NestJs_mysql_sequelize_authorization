import { IsEmail, isNotEmpty, IsNotEmpty, minLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @MinLength(8)
    Password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(10)
    mobileNumber: number;
  }