import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { LessonCardService } from "src/lessonCard/lessonCard.service";

@Injectable()
export class AuthorGuard implements CanActivate {
    constructor(
        private readonly lessonCardService: LessonCardService
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const { id } = request.params

        const entity = await this.lessonCardService.findOne(id)
        const user = request.user

        if (entity && user && entity.user.id === user.id) {
            return true
        }
        throw new NotFoundException('Упс... Вы не можете этого сделать...')

    }
} 