import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { Profile } from './models/profile.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProfileService } from './services/profile.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly ProfilesService: ProfileService) {}

  @Post()
  create(@Body() createProfile: Profile) {
    return this.ProfilesService.create(createProfile);
  }

  @Get()
  findAll() {
    return this.ProfilesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param('id') id: string) {
    return this.ProfilesService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id' })
  update(@Param('id') id: string, @Body() updateProfile: Profile) {
    return this.ProfilesService.update(id, updateProfile);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  remove(@Param('id') id: string) {
    return this.ProfilesService.remove(id);
  }
}
