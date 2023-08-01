import { Machine } from './models/machine.model';
import { MachinesService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
export declare class MachinesController {
    private readonly machinesService;
    constructor(machinesService: MachinesService);
    getAllMachine(): Promise<Machine[]>;
    getMachineById(id: number): Promise<Machine>;
    createMachine(createMachineDto: CreateMachineDto): Promise<Machine>;
    updateMachine(id: string, updateMachineDto: UpdateMachineDto): Promise<Machine>;
    deleteMachine(id: number): Promise<void>;
}
