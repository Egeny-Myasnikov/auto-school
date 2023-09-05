import { Module } from '@nestjs/common';
import { LessonCardService } from './lessonCard.service';
import { LessonCardController } from './lessonCard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonCard } from './entities/lessonCard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonCard])],
  controllers: [LessonCardController],
  providers: [LessonCardService]
})
export class LessonCardModule { }
