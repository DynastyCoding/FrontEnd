import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [FormsModule, BComponent],
  templateUrl: './a.component.html',
})
export class AComponent {
  name = '';
  email = '';
  address = '';
}
