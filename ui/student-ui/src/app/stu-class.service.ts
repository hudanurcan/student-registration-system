import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StuClassService {

  private classes = [
    'Hazırlık',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    'Mezun',
  ]
  constructor() { }

  getclasses() {
    return this.classes;
  }
}
