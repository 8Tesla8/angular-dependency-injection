import { Component, OnInit } from '@angular/core';
import { InfoService } from '../service/info.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }

  public get showName(){
    return this.infoService.name;
  }

  public get showSurname(){
    return this.infoService.surname;
  }
}
