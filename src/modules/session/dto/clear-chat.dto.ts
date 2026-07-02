import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class ClearChatDto {
  @ApiProperty({
    description: "Chat ID in the active engine's native format",
    example: '1234567890@c.us',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[^\s@]+@[^\s@]+$/, {
    message: 'chatId must be a valid chat JID in the form localpart@host',
  })
  chatId: string;
}
