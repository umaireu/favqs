import { Column, Entity, PrimaryColumn } from 'typeorm';

class QuoteDetails {
  @Column()
  @PrimaryColumn()
  id: number;

  @Column()
  favorites_count: number;

  @Column()
  dialogue: boolean;

  @Column({ default: false })
  favorite: boolean;

  @Column('array')
  tags: string[];

  @Column()
  url: string;

  @Column()
  upvotes_count: number;

  @Column()
  downvotes_count: number;

  @Column()
  author: string;

  @Column({ nullable: true })
  author_permalink: string;

  @Column()
  body: string;
}

@Entity('favorite_quotes')
export class Quote {
  @Column()
  qotd_date: Date;

  @Column(() => QuoteDetails)
  quote: QuoteDetails;
}
