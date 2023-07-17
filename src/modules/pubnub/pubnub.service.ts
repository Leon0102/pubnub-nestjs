import { Injectable } from '@nestjs/common';
import * as PubNub from 'pubnub';


@Injectable()
export class PubnubService {
  private readonly pubnub: PubNub;
  constructor(
  ) {
    this.pubnub = new PubNub({
      publishKey: 'pub-c-5a25989b-2765-4ec5-9603-c2052c8254fb',
      subscribeKey: 'sub-c-244fff7f-75f7-4756-9932-afab9cbd4079',
      uuid: 'myUniqueUserId',
    });
  }


  async publish(channel: string, message: any) {
    return await this.pubnub.publish({
      channel: 'hello_world',
      message: {
        title: 'greeting',
        description: 'hello world!'
      }
    });
  }
}
