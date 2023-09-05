import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateLessonCardDto } from './dto/create-lessonCard.dto'
import { UpdateLessonCardDto } from './dto/update-lessonCard.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { LessonCard } from './entities/lessonCard.entity'
import { Repository } from 'typeorm'

@Injectable()
export class LessonCardService {

  constructor(
    @InjectRepository(LessonCard)
    private readonly lessonCardRepository: Repository<LessonCard>
  ) {

  }
  // create
  async create(createLessonCardDto: CreateLessonCardDto, id: number) {
    const newLessonCard = {
      dateLesson: createLessonCardDto.dateLesson,
      timeLesson: createLessonCardDto.timeLesson,
      instructorName: createLessonCardDto.instructorName,
      user: { id, },
    }
    if (!newLessonCard) throw new BadRequestException('Что-то пошло не по плану...')

    return await this.lessonCardRepository.save(newLessonCard)
  }
  // findAll
  async findAll(id: number) {
    const lessonCards = await this.lessonCardRepository.find({
      where: { user: { id } },
      order: {
        createdAt: 'DESC'
      }

    })
    if (!lessonCards) throw new NotFoundException('Записи не найдены')
    return lessonCards
  }
  // findOne
  async findOne(id: number) {
    const lessonCard = await this.lessonCardRepository.findOne({
      where: {
        id
      },
      relations: { user: true },
    })
    if (!lessonCard) throw new NotFoundException('Запись не найдена')
    return lessonCard
  }
  // update
  async update(id: number, updateLessonCardDto: UpdateLessonCardDto) {
    LessonCard
    const lessonCard = await this.lessonCardRepository.findOne({
      where: {
        id
      }
    })
    if (!lessonCard) throw new NotFoundException('Запись не найдена')
    return await this.lessonCardRepository.update(id, updateLessonCardDto)
  }


  // remove
  async remove(id: number) {
    const lessonCard = await this.lessonCardRepository.findOne({
      where: {
        id
      }
    })
    if (!lessonCard) throw new NotFoundException('Запись не найдена')
    await this.lessonCardRepository.delete(id)
    return lessonCard
  }



  // findAllWithPagination
  async findAllWithPagination(id: number, page: number, limit: number) {
    const lessonCards = await this.lessonCardRepository.find({
      where: {
        user: { id }
      },
      relations: { user: true },
      order: { createdAt: 'DESC' },
      take: limit,
      skip: (page - 1) * limit
    })
    return lessonCards
  }
  // async findAllByType(id: number, type: string) {
  //   const lessonCards = await this.lessonCardRepository.find({
  //     where: {
  //       user: { id },
  //       type
  //     }
  //   })
  //   const total = lessonCards.reduce((acc, obj) => acc + obj.amount, 0)
  //   return total
  // }
}
