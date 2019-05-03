import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public name = '';
  public surname = '';

  constructor() { }
}
