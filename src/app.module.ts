import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [ ConfigModule.forRoot(), StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
