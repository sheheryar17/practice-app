import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons: string[] = ['Sheheryar', 'Manan', 'Sheikh'];

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }

  constructor() { }
}
