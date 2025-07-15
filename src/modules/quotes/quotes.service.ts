import { Injectable } from '@nestjs/common';
import { Quote } from './quote.entity';
import { CreateFavoriteQuoteDto } from './dtos/quote.dto';
import { QuotesRepository } from './quotes.respository';

@Injectable()
export class QuotesService {
  constructor(private quoteRepository: QuotesRepository) {}
  getFavoriteQuotes(): Promise<Quote[]> {
    return this.quoteRepository.getFavoriteQuotes();
  }

  saveFavoriteQuote(quote: CreateFavoriteQuoteDto) {
    return this.quoteRepository.saveOrUpdateFavoriteQuote(quote);
  }

  removeFavoriteQuote(quoteId: number) {
    return this.quoteRepository.deleteFavoriteQuote(quoteId);
  }
}
