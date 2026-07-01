import { Component } from '@angular/core';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-output',
  imports: [BComponent],
  templateUrl: './a.component.html',
})
export class AComponent {
  receivedData = {name: '', email: '', address: ''};

  onReceive(event: {name: string, email: string, address: string}){
    this.receivedData = event;
  }
}
