import { Component } from '@angular/core';
import { Pet } from './models/pet';
import { format } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pets: Pet[] = [];
  pet = new Pet();
  title = 'Hello World';
  name = 'allUsersFromDB';
  processPet(form: ngForm) {
    console.log('You have submitted the form!');
    console.log(this.pet);
    this.pets.push(this.pet);
    this.pet = new Pet();
    form.reset();
  }
}
