import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsString()
  email: string;

  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  avatarPath: string;
}
