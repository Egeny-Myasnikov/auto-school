import { Min } from "class-validator";
import { LessonCard } from "src/lessonCard/entities/lessonCard.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    userName: string

    @Column()
    @Min(0, { message: 'Введите Email' })
    email: string

    @Column()
    @Min(0, { message: 'Введите пароль' })
    password: string

    @OneToMany(() => LessonCard, (lessonCard) => lessonCard.user, { onDelete: 'CASCADE' })
    lessonCards: LessonCard[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}
