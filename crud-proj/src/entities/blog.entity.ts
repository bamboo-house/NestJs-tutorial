import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({
    nullable: false,
    comment: '記事タイトル',
  })
  title: string;

  @Column({
    type: 'text',
    nullable: true,
    comment: '記事本文',
  })
  content: string;

  @CreateDateColumn()
  readonly createdAt: string;

  @UpdateDateColumn()
  readonly updatedAt: string;
}
