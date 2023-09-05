import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonCardDto } from './create-lessonCard.dto';

export class UpdateLessonCardDto extends PartialType(CreateLessonCardDto) { }
