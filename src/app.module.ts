import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { OfficeModule } from './office/office.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/cadastro'), 
    AccountModule, 
    OfficeModule, 
    PlanModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
