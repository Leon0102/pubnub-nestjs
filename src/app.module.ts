import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubnubModule } from './modules/pubnub/pubnub.module';

@Module({
  imports: [PubnubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
