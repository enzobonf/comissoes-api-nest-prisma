import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { ComissoesModule } from './comissoes/comissoes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        prismaOptions: {
          log: ['info'],
          rejectOnNotFound: true,
        },
      },
    }),
    ComissoesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
