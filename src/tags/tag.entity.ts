import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'text',
    unique: true,
  })
  description?: string;

  @Column({
    type: 'text',
    unique: true,
  })
  schema: string;

  @Column({
    type: 'varchar',
    length: 1024,
    unique: true,
  })
  featuredImageUrl: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  dateled: Date;
}
