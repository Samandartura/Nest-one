import { Builder } from './models/builder.model';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';
export declare class BuilderController {
    private readonly builderService;
    constructor(builderService: BuilderService);
    getAllBuilder(): Promise<Builder[]>;
    getBuilderById(id: number): Promise<Builder>;
    createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder>;
    updateBuilder(id: string, updateBuilderDto: UpdateBuilderDto): Promise<Builder>;
    deleteBuilder(id: number): Promise<void>;
}
