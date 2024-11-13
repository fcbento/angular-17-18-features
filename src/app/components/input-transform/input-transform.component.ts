import { Component, Input, numberAttribute } from '@angular/core';
import { User } from '../../app.component';

function setUserNameToUpperCase (user: User): User {
  return {
    ...user,
    name: user.name.toLocaleUpperCase()
  }
}

@Component({
  selector: 'app-input-transform',
  standalone: true,
  imports: [],
  template: `
    <h2>Name: {{user?.name}}</h2>
    <h2>Age: {{user?.age}}</h2>
    <h2>Profession: {{user?.profession}}</h2>
  `
})
export class InputTransformComponent {

  @Input({required: true, transform: numberAttribute}) public userAge!: User;
  @Input({required: true, transform: setUserNameToUpperCase}) public user!: User;

}
