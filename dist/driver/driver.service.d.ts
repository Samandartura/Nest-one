import { Driver } from './models/driver.model';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
export declare class DriverService {
    private driverRepo;
    constructor(driverRepo: typeof Driver);
    getAllDrivers(): Promise<Driver[]>;
    getDriverById(id: number): Promise<Driver>;
    createDriver(createDriverDto: CreateDriverDto): Promise<Driver>;
    updateDriver(id: number, updateDriverDto: UpdateDriverDto): Promise<Driver>;
    deleteDriver(id: number): Promise<void>;
}
