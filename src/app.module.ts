import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonsterModule } from './monster/monster.module';
import { ConfigModule } from '@nestjs/config';
import { DamageTypeModule } from './damage-type/damage-type.module';
import { ConditionTypeModule } from './condition-type/condition-type.module';


@Module({
    imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    MonsterModule,
    DamageTypeModule,
    ConditionTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
