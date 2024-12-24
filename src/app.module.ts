import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import corsConfig from '@/config/cors.config';

@Module({
	imports: [ConfigModule.forRoot({ load: [corsConfig], isGlobal: true })],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
