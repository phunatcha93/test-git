import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'app-cal-buffe',
  standalone: true,
  imports: [AppComponent,
    ButtonModule,
    InputTextModule,
    MessagesModule ],
  templateUrl: './cal-buffe.component.html',
  styleUrl: './cal-buffe.component.scss'
})
export class CalBuffeComponent {
  value = 0;
  calPrice(pay:string){
    this.value = (Number(pay)*3)/4;
  }
}
