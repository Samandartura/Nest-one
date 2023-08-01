import { Driver } from './models/driver.model';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    getAllDrivers(): Promise<Driver[]>;
    getDriverById(id: number): Promise<Driver>;
    createDriver(createDriverDto: CreateDriverDto): Promise<Driver>;
    updateDriver(id: string, updateDriverDto: UpdateDriverDto): Promise<Driver>;
    deleteDriver(id: number): Promise<void>;
}
