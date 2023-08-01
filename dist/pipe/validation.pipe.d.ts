import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidaitonPipe implements PipeTransform<any> {
    transform(value: any, metadate: ArgumentMetadata): Promise<any>;
}
