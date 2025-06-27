import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateFavoriteQuoteDto, FavoriteQuotesDto } from './dtos/quote.dto';
import { Serialize } from '../../decorators/serialize.decorator';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get('favorites')
  @Serialize(FavoriteQuotesDto)
  getFavoriteQuotes() {
    return this.quotesService.getFavoriteQuotes();
  }

  @Post('favorite')
  async saveFavoriteQuote(@Body() quote: CreateFavoriteQuoteDto) {
    return this.quotesService.saveFavoriteQuote(quote);
  }

  @Delete('favorite/:quoteId')
  removeFavoriteQuote(@Param('quoteId', ParseIntPipe) quoteId: number) {
    return this.quotesService.removeFavoriteQuote(quoteId);
  }
}
