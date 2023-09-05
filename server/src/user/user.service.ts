import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {

  }

  async create(createUserDto: CreateUserDto) {

    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      }
    })
    if (existUser) throw new BadRequestException('Такой Email уже существует!')
    const user = await this.userRepository.save({
      userName: createUserDto.userName,
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
    })

    const token = this.jwtService.sign({ email: createUserDto.email })

    return { user, token };
  }


  async findOne(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email
      }
    })
    if (!user) throw new UnauthorizedException('Не верно введён Email!')
    return user
  }


}
