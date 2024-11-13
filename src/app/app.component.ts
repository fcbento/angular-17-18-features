import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTransformComponent } from './components/input-transform/input-transform.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface User{
  name: string;
  age: string;
  profession: string;
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTransformComponent],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
    
    <app-input-transform [user]="userList[0]" [userAge]="userList[0].age"/>

    <!-- <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 1rem;">
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
    </div> -->
  `,
})
export class AppComponent implements OnInit{
  destroyedRef = inject(DestroyRef);
  title = 'angular-17-18-features';
  renderBlock = false;
  userList: Array<User> = [
    {
      age: '21',
      id: '1',
      name: 'Felipe',
      profession: 'Software developer',
    },
    {
      age: '20',
      id: '2',
      name: 'Joaquim',
      profession: 'Scrum master',
    },
    {
      age: '23',
      id: '3',
      name: 'Otavio',
      profession: 'CEO',
    },
  ];

  userData$ = of(this.userList);

  ngOnInit(): void {
    this.userData$
    .pipe(takeUntilDestroyed(this.destroyedRef))
    .subscribe({
      next:(res) => {
        console.log(res)
      }
    })
  }

}
