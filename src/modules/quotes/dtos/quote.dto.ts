import {
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsDate,
  IsOptional,
} from 'class-validator';
import { Expose, Type } from 'class-transformer';

class QuoteDetailsDto {
  @IsNumber()
  @Expose()
  id: number;

  @IsNumber()
  @Expose()
  favorites_count: number;

  @IsBoolean()
  @Expose()
  dialogue: boolean;

  @IsBoolean()
  @IsOptional()
  favorite: boolean;

  @IsArray()
  @IsString({ each: true })
  @Expose()
  tags: string[];

  @IsString()
  @Expose()
  url: string;

  @IsNumber()
  @Expose()
  upvotes_count: number;

  @IsNumber()
  @Expose()
  downvotes_count: number;

  @IsString()
  @Expose()
  author: string;

  @IsString()
  @IsOptional()
  author_permalink: string;

  @IsString()
  @Expose()
  body: string;
}

export class CreateFavoriteQuoteDto {
  @IsDate()
  @Type(() => Date)
  qotd_date: Date;

  @ValidateNested()
  @Type(() => QuoteDetailsDto)
  quote: QuoteDetailsDto;
}

export class FavoriteQuotesDto {
  @IsDate()
  @Expose()
  qotd_date: Date;

  @Type(() => QuoteDetailsDto)
  @Expose()
  quote: QuoteDetailsDto;
}
