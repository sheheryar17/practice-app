import { Component } from '@angular/core';
import { PersonsService } from './persons.service';


@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
    constructor(private personsService: PersonsService) {}


    enteredPersonName = '';
    onCreatePerson() {
   // console.log('Entered Name: ' + this.enteredPersonName);
   this.personsService.addPerson(this.enteredPersonName);
   this.enteredPersonName  = '';
    }
}
