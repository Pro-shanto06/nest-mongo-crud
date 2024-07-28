import { Injectable, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      ...rest,
      password: hashedPassword,
    } as User;

    try {
      return await this.userRepository.create(user);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findAll(page: number, limit: number): Promise<User[]> {
    return this.userRepository.findAll(page, limit);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<{ message: string }> {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const updatedUser = await this.userRepository.update(id, updateUserDto);
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return { message: 'User updated successfully' };
  }

  async delete(id: string): Promise<{ message: string }> {
    const deletedUser = await this.userRepository.delete(id);
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return { message: 'User deleted successfully' };
  }
}
