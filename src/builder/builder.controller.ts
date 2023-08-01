import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Builder } from './models/builder.model';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('builders')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @ApiOperation({ summary: 'All Builder' })
  @Get('all')
  async getAllBuilder(): Promise<Builder[]> {
    return this.builderService.getAllBuilder();
  }

  @ApiOperation({ summary: 'Id Search Builder' })
  @Get(':id')
  async getBuilderById(@Param('id') id: number): Promise<Builder> {
    return this.builderService.getBuilderById(id);
  }

  @ApiOperation({ summary: 'Add Builder' })
  @Post('create')
  async createBuilder(@Body() createBuilderDto: CreateBuilderDto) {
    return this.builderService.createBuilder(createBuilderDto);
  }

  @ApiOperation({ summary: 'Update Builder' })
  @Put(':id')
  async updateBuilder(
    @Param('id') id: string,
    @Body() updateBuilderDto: UpdateBuilderDto,
  ): Promise<Builder> {
    return this.builderService.updateBuilder(+id, updateBuilderDto);
  }

  @ApiOperation({ summary: 'Delete Builder' })
  @Delete(':id')
  async deleteBuilder(@Param('id') id: number): Promise<void> {
    return this.builderService.deleteBuilder(id);
  }
}
