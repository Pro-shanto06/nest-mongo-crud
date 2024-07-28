import { IsString, IsEmail, IsNotEmpty, MinLength, Matches, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  fname: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @Matches(/^01\d{9}$/, { message: 'Please enter a valid phone number starting with 01' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
    message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
  })
  password: string;

  @IsString()
  @IsOptional()
  userType?: string = 'user';

  @IsString()
  @IsOptional()
  status?: string = 'active';
}
