import { Component, OnInit } from '@angular/core';
import { InfoService } from '../service/info.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }


  public get editName(){
    return this.infoService.name;
  }
  public set editName(value:string){
    this.infoService.name = value;    
  }

  
  public get editSurname(){
    return this.infoService.surname;
  }
  public set editSurname(value:string){
    this.infoService.surname = value;    
  }
}
