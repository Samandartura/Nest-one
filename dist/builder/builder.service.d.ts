import { Builder } from './models/builder.model';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';
export declare class BuilderService {
    private builderRepo;
    constructor(builderRepo: typeof Builder);
    getAllBuilder(): Promise<Builder[]>;
    getBuilderById(id: number): Promise<Builder>;
    createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder>;
    updateBuilder(id: number, updateBuilderDto: UpdateBuilderDto): Promise<Builder>;
    deleteBuilder(id: number): Promise<void>;
}
