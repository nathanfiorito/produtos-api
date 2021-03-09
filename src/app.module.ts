import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    database: 'livraria',
    autoLoadModels: true,
    synchronize: true,
  }),
  SequelizeModule.forFeature([Livro])
],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
