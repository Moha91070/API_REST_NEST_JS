import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';
import { PostService } from './services/post.service';
import { PostController } from './posts.controller';
import { PostModel } from './models/posts.model';

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [
    PostModel,
    PostService,
  ],
  exports: [PostService],
})
export class PostModule { }
