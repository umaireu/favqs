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

  async saveOrUpdateFavoriteQuote(createQuoteDto: CreateFavoriteQuoteDto) {
    await this.quoteRepository.findOneAndUpdate(
      { 'quote.id': createQuoteDto.quote.id },
      { $set: createQuoteDto },
      {
        upsert: true,
      },
    );
  }

  async deleteFavoriteQuote(quoteId: number) {
    await this.quoteRepository.deleteOne({ 'quote.id': quoteId });
  }
}
