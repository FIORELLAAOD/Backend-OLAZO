// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
//--------------------------------
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { AppController } from './app.controller'; // Asegúrate de importar el controlador
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: "postgresql://postgres:bacyOqDvVkXqGhRyQMpzSHBBHuzhIxWV@autorack.proxy.rlwy.net:48015/railway",
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Usuario]), 
  ],
  controllers: [AppController], // Agregar el controlador aquí
})
export class AppModule {}
