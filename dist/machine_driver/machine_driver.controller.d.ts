import { Machine_driver } from './models/machine_driver.model';
import { Machines_driverService } from './machine_driver.service';
import { CreateMachine_driverDto } from './dto/create-machine_driver.dto';
import { UpdateMachine_driverDto } from './dto/update-machine_driver.dto';
export declare class Machines_driverController {
    private readonly machines_driverService;
    constructor(machines_driverService: Machines_driverService);
    getAllMachine_driver(): Promise<Machine_driver[]>;
    getMachine_driverById(id: number): Promise<Machine_driver>;
    createMachine(createMachine_driverDto: CreateMachine_driverDto): Promise<Machine_driver>;
    updateMachine_driver(id: string, updateMachine_driverDto: UpdateMachine_driverDto): Promise<Machine_driver>;
    deleteMachine_driver(id: number): Promise<void>;
}
