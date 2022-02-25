import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProfileService } from './services/profile.service';
import { ProfilesController } from './profiles.controller';
import { ProfileModel } from './models/profile.model';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfilesController],
  providers: [
    ProfileModel,
    ProfileService,
  ],
  exports: [ProfileService],
})
export class ProfileModule { }
