import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Site, StandingStyle } from '../../database/base.entity';
import { Game } from './game.entity';

@Entity()
export class GameInformation {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'longtext' }) howToPlay: string;
  @Column({ nullable: true, type: 'text' }) benefit?: string;

  @Index()
  @Column({
    comment: '실내/실외/둘다가능',
    type: 'enum',
    enum: Site,
    default: Site.INDOOR,
  })
  availableSite?: Site;

  @Index()
  @Column({
    comment: '좌식/입식',
    type: 'enum',
    enum: StandingStyle,
    default: StandingStyle.SEDENTARY,
  })
  standingStyle?: Site;

  @Column({ comment: '최소 인원' }) minNumberOfPeople: number;
  @Column({ comment: '최대 인원(9999=이상)' }) maxNumberOfPeople: number;

  @Column({ comment: '최소 소요 시간' }) minMinuteTaken: number;
  @Column({ comment: '최대 소요 시간' }) maxMinuteTaken: number;

  @OneToOne(() => Game, (game) => game.information, { cascade: true })
  @JoinColumn()
  game: Game;
}
