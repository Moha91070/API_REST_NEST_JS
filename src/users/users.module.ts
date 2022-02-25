import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PostModule } from 'src/posts/posts.module';
import { ProfileModule } from 'src/profiles/profiles.module';
import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule, ProfileModule, PostModule],
  controllers: [UsersController],
  providers: [
    UserModel,
    UserService,
  ],
  exports: [UserService],
})
export class UsersModule { }
