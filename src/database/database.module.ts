import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';

const providers = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27018/test'),
    },
]

@Module({
    providers,
    exports: providers,
})
export class DatabaseModule { }
