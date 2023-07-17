import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { PostEntity } from '../post.entity';

export class PostDto extends AbstractDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  constructor(postEntity: PostEntity) {
    super(postEntity);
    this.title = postEntity.title;
    this.description = postEntity.description;
  }
}
