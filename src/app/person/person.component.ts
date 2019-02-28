import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';
import {Person} from '../person';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person;
  singlePerson:Person;
  constructor(private personService: PersonService) { }

  onSelect(person:Person): void{
    this.selectedPerson = person;
    console.log("selected is"+this.selectedPerson.name);
  }
  onAdd(name:string): void{
    if (!name){return;}
    this.personService.addOne({name} as Person).subscribe(person => { this.persons.push(person)});
  }
  getPersons(): void{

    this.personService.getAll().subscribe(persons => this.persons = persons);
    
    
  }

  ngOnInit(
  ) {

    this.getPersons();
  }

}
