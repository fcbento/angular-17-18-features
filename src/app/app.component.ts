import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-17-18-features';
  userList: Array<{name: string; age: number; profession: string; id:string}> = [
    {
      age: 21,
      id: '1',
      name: 'Felipe',
      profession: 'Software developer'
    },
    {
      age: 20,
      id: '2',
      name: 'Joaquim',
      profession: 'Scrum master'
    },
    {
      age: 23,
      id: '3',
      name: 'Otavio',
      profession: 'CEO'
    }
  ]
}
