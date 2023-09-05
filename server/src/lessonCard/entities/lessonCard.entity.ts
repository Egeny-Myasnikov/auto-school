import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class LessonCard {
    @PrimaryGeneratedColumn({ name: 'lessonCard_id' })
    id: number

    @Column()
    dateLesson: string

    @Column({ nullable: true })
    instructorName: string

    @ManyToOne(() => User, (user) => user.lessonCards)
    @JoinColumn({ name: 'user_id' })
    user: User


    @Column()
    timeLesson: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
