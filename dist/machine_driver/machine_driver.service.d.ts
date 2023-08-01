import { Machine_driver } from './models/machine_driver.model';
import { CreateMachine_driverDto } from './dto/create-machine_driver.dto';
import { UpdateMachine_driverDto } from './dto/update-machine_driver.dto';
export declare class Machines_driverService {
    private machineRepo;
    constructor(machineRepo: typeof Machine_driver);
    getAllMachine_driver(): Promise<Machine_driver[]>;
    getMachine_driverById(id: number): Promise<Machine_driver>;
    createMachine(createMachine_driverDto: CreateMachine_driverDto): Promise<Machine_driver>;
    updateMachine_driver(id: number, updateMachine_driverDto: UpdateMachine_driverDto): Promise<Machine_driver>;
    deleteMachine_driver(id: number): Promise<void>;
}
