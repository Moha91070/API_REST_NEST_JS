import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/services/user.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService, private jwtService: JwtService) { }
    async signinLocal(dto: AuthDto) {
        //retrieve User
        const user = await this.usersService.findByCredential(dto.email);
        const isMatch = await bcrypt.compare(dto.password, user.password);

        if (!user) throw new UnauthorizedException('Credentials not corrects');

        if (!isMatch) throw new UnauthorizedException('Credentials not corrects');

        return this.signUser(user._id, user.email, 'user');
    }

    signUser(userId: Object, email: string, type: string){
        const token = this.jwtService.sign({
            sub: userId,
            email,
            claim: type
        })
        const user = { userId: userId, email: email }

        return {user: user, token: token};
    }

    async register(dto: AuthDto) {
        const user = await this.usersService.findByCredential(dto.email);
        if (user) throw new UnauthorizedException('Email aldready used')
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(dto.password, salt);

        return this.usersService.create({email: dto.email, password: password});
    }
}
