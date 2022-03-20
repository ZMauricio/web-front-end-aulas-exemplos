import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  public selecionado: string = 'Matemática';
  public cursos = ['Matemática', 'Informática', 'Mecânica', 'Eletrônica'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
