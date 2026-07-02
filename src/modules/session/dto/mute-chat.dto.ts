import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Matches, Min } from 'class-validator';

export class MuteChatDto {
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
    description: 'true = mute the chat, false = unmute',
    example: true,
  })
  @IsBoolean()
  mute: boolean;

  @ApiProperty({
    description:
      'Optional mute duration in seconds. Omit (or 0) to mute indefinitely. Ignored when mute=false.',
    example: 28800,
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  durationSecs?: number;
}
