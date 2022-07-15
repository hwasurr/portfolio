import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../database/base.entity';
import { GameReaction } from '../game/entities/game-reaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn() readonly id!: number;
  @Index({ unique: true }) @Column() loginId: string;
  @Column() password: string;
  @Column({ nullable: true }) nickname?: string;
  @Column({ nullable: true }) avatar?: string;
  @Column({ type: 'enum', enum: Role, default: Role.GUEST }) role?: Role;

  @CreateDateColumn() readonly createDate!: Date;
  @UpdateDateColumn() readonly updateDate!: Date;

  // 관계
  @OneToMany(() => GameReaction, (reaction) => reaction.user, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  reactions?: GameReaction[];
}
