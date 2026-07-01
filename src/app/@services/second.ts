import { inject, Inject } from '@angular/core';
import { ExampleService } from '../@services/example.service';

export class SecondComponent {
  userName: string = '';
  private exampleService = inject(ExampleService);

  constructor() {
    this.userName = this.exampleService.userName;
  }
}
