import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class SetPresenceDto {
  @ApiProperty({
    description: "Global presence for the linked account: 'available' (online) or 'unavailable' (offline).",
    enum: ['available', 'unavailable'],
    example: 'available',
  })
  @IsString()
  @IsNotEmpty()
  @IsIn(['available', 'unavailable'])
  presence: 'available' | 'unavailable';
}
