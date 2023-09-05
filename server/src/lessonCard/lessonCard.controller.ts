import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards, Req, Query } from '@nestjs/common';
import { LessonCardService } from './lessonCard.service';
import { CreateLessonCardDto } from './dto/create-lessonCard.dto';
import { UpdateLessonCardDto } from './dto/update-lessonCard.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthorGuard } from 'src/guard/author.guard';

@Controller('lessons')
export class LessonCardController {
  constructor(private readonly lessonCardService: LessonCardService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createLessonCardDto: CreateLessonCardDto, @Req() req) {

    return this.lessonCardService.create(createLessonCardDto, +req.user.id);
  }

  // @Get(':type/find')
  // @UseGuards(JwtAuthGuard)
  // findAllByType(
  //   @Req() req, @Param('type') type: string
  // ) {
  //   return this.lessonCardService.findAllByType(
  //     +req.user.id,
  //     type
  //   )
  // }

  @Get('pagination')
  @UseGuards(JwtAuthGuard)
  findAllWithPagination(
    @Req() req,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 3
  ) {
    return this.lessonCardService.findAllWithPagination(
      +req.user.id,
      +page,
      +limit)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.lessonCardService.findAll(+req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  findOne(@Param('id') id: string) {
    return this.lessonCardService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  update(@Param('id') id: string, @Body() updateLessonCardDto: UpdateLessonCardDto) {
    return this.lessonCardService.update(+id, updateLessonCardDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  remove(@Param('id') id: string) {
    return this.lessonCardService.remove(+id);
  }


}
