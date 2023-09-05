import { IsNotEmpty, IsString } from "class-validator"

export class CreateLessonCardDto {
    @IsString()
    @IsNotEmpty({ message: 'Выберете дату!' })
    dateLesson: string

    @IsNotEmpty({ message: 'Выберете время!' })
    @IsString()
    timeLesson: string

    @IsNotEmpty({ message: 'Выберете инструктора!' })
    @IsString()
    instructorName: string

}
