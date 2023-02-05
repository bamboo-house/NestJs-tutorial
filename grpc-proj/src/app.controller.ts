import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  AppServiceController,
  SampleData,
  SampleDataById,
} from './proto/sample';

@Controller()
export class AppController implements AppServiceController {
  @GrpcMethod('AppService', 'FindOne')
  findOne(data: SampleDataById): SampleData {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ] as SampleData[];
    const filteredItems = items.filter((item) => item.id === data.id);
    return filteredItems.length > 0 ? filteredItems[0] : ({} as SampleData);
  }
}
