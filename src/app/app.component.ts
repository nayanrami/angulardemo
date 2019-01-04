import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = 'Nayan Mali';
  public username = '';
  greetUser(value){
    this.username= value;
  }
}
