import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schema/account.schema';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Account.name,
                schema: AccountSchema
            }
        ])
    ],
    controllers: [AccountController],
    providers: [AccountService]
})
export class AccountModule {}
