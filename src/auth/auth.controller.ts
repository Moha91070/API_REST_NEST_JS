import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import {
    ApiBearerAuth,
    ApiTags,
    ApiOperation
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('authentication')
@Controller('authentication')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @ApiOperation({ summary: 'return a JWT Token for authentication' })
    signinLocal(@Body() dto: AuthDto) {
        return this.authService.signinLocal(dto);
    }

    @Post('register')
    @ApiOperation({ summary: 'register a new User.' })
    register(@Body() dto: AuthDto) {
        return this.authService.register(dto);
    }

}