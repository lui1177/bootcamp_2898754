import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';
import { BootcampsModule } from './bootcamps/bootcamps.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "bootcamps_2898754",
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true
            }),
    CoursesModule,
    ReviewsModule,
    UsersModule,
    BootcampsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
   