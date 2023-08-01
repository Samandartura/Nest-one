import { Machine } from './models/machine.model';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
export declare class MachinesService {
    private machineRepo;
    constructor(machineRepo: typeof Machine);
    getAllMachine(): Promise<Machine[]>;
    getMachineById(id: number): Promise<Machine>;
    createMachine(createMachineDto: CreateMachineDto): Promise<Machine>;
    updateMachine(id: number, updateMachineDto: UpdateMachineDto): Promise<Machine>;
    deleteMachine(id: number): Promise<void>;
}
