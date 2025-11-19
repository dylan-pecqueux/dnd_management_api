import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonsterModule } from './monster/monster.module';

@Module({
    imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qsdazeRF:124563',
      database: 'dnd_management',
      entities: [],
      synchronize: true,
    }),
    MonsterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
