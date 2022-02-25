import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profiles/profiles.module';
import { PostModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    ProfileModule,
    PostModule,
    AuthModule
  ],
})
export class AppModule { }
