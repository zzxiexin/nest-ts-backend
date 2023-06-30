import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User_1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
