import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
