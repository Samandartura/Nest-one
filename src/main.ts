import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);

    const PORT = process.env.PORT;
    app.useGlobalPipes(new ValidationPipe());

    const config=new DocumentBuilder()
      .setTitle("Nest-One Project")
      .setDescription("Rest API")
      .setVersion("1.0.0")
      .addTag("NESTJS,Postgres,Sequielize")
      .build()
    const document=SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('api/dosc',app,document)

    app.listen(PORT, () => {
      console.log(`server ${PORT}-Portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
