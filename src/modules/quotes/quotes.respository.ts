import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Quote } from './quote.entity';
import { CreateFavoriteQuoteDto } from './dtos/quote.dto';

@Injectable()
export class QuotesRepository {
  constructor(
    @InjectRepository(Quote)
    private quoteRepository: MongoRepository<Quote>,
  ) {}

  getFavoriteQuotes(): Promise<Quote[]> {
    return this.quoteRepository.find();
  }

  saveOrUpdateFavoriteQuote(createQuoteDto: CreateFavoriteQuoteDto) {
    return this.quoteRepository.findOneAndUpdate(
      { 'quote.id': createQuoteDto.quote.id },
      { $set: createQuoteDto },
      {
        upsert: true,
      },
    );
  }

  deleteFavoriteQuote(quoteId: number) {
    return this.quoteRepository.deleteOne({ 'quote.id': quoteId });
  }
}
