import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeService {

  zipcodes = ['12341', '12342', '12343', '12344', '12345', '12346', '12347', '12348', '12349'];

  constructor() { }

  autocomplete(term: string) {
    return this.zipcodes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
  }
}
