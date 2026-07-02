import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, Matches } from 'class-validator';

export class PinChatDto {
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

  @ApiProperty({
    description: 'true = pin the chat to the top, false = unpin. WhatsApp allows at most 3 pinned chats.',
    example: true,
  })
  @IsBoolean()
  pin: boolean;
}
