import { Module } from '@nestjs/common';
import { PubnubController } from './pubnub.controller';
import { PubnubService } from './pubnub.service';

@Module({
  controllers: [PubnubController],
  providers: [PubnubService]
})
export class PubnubModule {}
