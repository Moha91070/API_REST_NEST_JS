import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam } from '@nestjs/swagger';
import { Profile } from '../profiles/models/profile.model';
import { UserService } from './services/user.service';
import { PostService } from '../posts/services/post.service';
import { ProfileService } from '../profiles/services/profile.service';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService, private readonly profileServices: ProfileService, private readonly postServices: PostService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id/posts')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'return a list of User\'s posts' })
  findPosts(@Param('id') id: string) {
    return this.postServices.findAllByUser(id);
  }


  @ApiResponse({
    status: 200,
    description: 'The found record'
  })
  @UseGuards(AuthGuard('jwt'))
  @Get(':id/profile')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'return a User\'s profile' })
  findProfile(@Param('id') id: string) {
    return this.profileServices.findAllByUser(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id/profile')
  @ApiParam({ name: 'id' })
  @ApiOperation({summary: 'update a User\'s profile.'})
  update(@Param('id') id: string, @Body() updateProfile: Profile) {
    return this.profileServices.update(id, updateProfile);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiParam({ name: 'id' })
  @ApiOperation({summary: 'delete an user by it\'s id.'})
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
