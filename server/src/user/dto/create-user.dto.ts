import { IsEmail, IsString, Min, MinLength } from "class-validator";


export class CreateUserDto {
    @IsString()
    userName: string

    @IsEmail()
    email: string

    @MinLength(5, { message: 'Пароль должен содержать более 5 символов' })
    password: string


}
