import { Body, Controller, Post } from '@nestjs/common';
import { PubnubService } from './pubnub.service';

@Controller('pubnub')
export class PubnubController {

  constructor(
    private readonly pubnubService: PubnubService
  ) {

  }


  @Post('test')
  async test(@Body() body:{channel:string, message:any}) {
    return await this.pubnubService.publish(body.channel, body.message);
  }
}
