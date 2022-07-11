import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 30 }) name: string;
}
