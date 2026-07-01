import {inject} from '@angular/core';
import { ExampleService } from '../@services/example.service';

export class FirstComponent {
  private exampleService = inject(ExampleService);

  sendData() {
    this.exampleService.userName = 'Allen';
  }
}
