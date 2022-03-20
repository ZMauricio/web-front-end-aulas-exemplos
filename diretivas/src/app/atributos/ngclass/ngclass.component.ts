import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  public ativado: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public aplicarCSS() {
    this.ativado = !this.ativado;
  }

  public classesCSS() {
    return {
      'cor-fundo': true, 
      'estilo-letra': true, 
      'borda-paragrafo': true
    };
  }
}
