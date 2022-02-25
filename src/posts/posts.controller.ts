import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam } from '@nestjs/swagger';
import { Post as Posts } from './models/posts.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PostService } from './services/post.service';

@ApiBearerAuth()
@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private readonly PostService: PostService) { }

  @Post()
  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createProfile: Posts) {
    return this.PostService.create(createProfile);
  }

  @ApiResponse({
    status: 200,
    description: 'The found records'
  })
  @ApiOperation({ summary: 'Recove all posts' })
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.PostService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'The found record'
  })
  @ApiOperation({ summary: 'Get one specific post by this Id' })
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param('id') id: string) {
    return this.PostService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Update post' })
  update(@Param('id') id: string, @Body() updatePost: Posts) {
    return this.PostService.update(id, updatePost);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Delete post' })
  remove(@Param('id') id: string) {
    return this.PostService.remove(id);
  }
}
