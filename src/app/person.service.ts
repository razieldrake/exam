import { Injectable } from '@angular/core';
import { Person} from './person';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  private personsUrl = "http://localhost:8080/phonebook/";
  private  headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Person[]>{
    return this.http.get<Person[]>(this.personsUrl,httpOptions);
  }

  public getOne(name: string): Observable<Person>{

    return this.http.get<Person>(this.personsUrl+name,httpOptions);
  }

  public addOne(person:Person): Observable<Person>{

    return this.http.post<Person>(this.personsUrl,person,httpOptions)


  }

  public put(){


  }

  public remove(){

  }
}
