import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 1rem;">
      <button (click)="renderBlock = true">Renderizar título</button>

      @defer(when renderBlock) {
        <h3 style="color: red;">Element rendered on interaction</h3>
      }
      @placeholder {
        <span>Initial placeholder content</span>
      }
      @loading {
        <span>Content being loaded</span>
      }
      @error {
        <span>Content being loaded</span>
      }
    </div>
  `,
})
export class AppComponent {
  title = 'angular-17-18-features';
  renderBlock = false;
  userList: Array<{
    name: string;
    age: number;
    profession: string;
    id: string;
  }> = [
    {
      age: 21,
      id: '1',
      name: 'Felipe',
      profession: 'Software developer',
    },
    {
      age: 20,
      id: '2',
      name: 'Joaquim',
      profession: 'Scrum master',
    },
    {
      age: 23,
      id: '3',
      name: 'Otavio',
      profession: 'CEO',
    },
  ];
}
