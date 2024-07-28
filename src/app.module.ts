import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://proshantosaha1999:W0ZsFvmK5dmk5ayU@cluster0.hwzdkym.mongodb.net/NestjsMongoCrud?retryWrites=true&w=majority'),
    UserModule,
  ],
})
export class AppModule {}
