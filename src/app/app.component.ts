import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-learning-project';
  expression = true
  age = 18

  onSayHi(text: string) {
    console.log(text)
  }
}
