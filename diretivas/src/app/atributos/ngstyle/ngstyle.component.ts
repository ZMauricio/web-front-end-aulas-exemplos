import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  public tamanho: number = 20;
  public valorFonte: string = this.tamanho+'px';
  public validaFonte: boolean = false;
  public validaCor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public incrementar() {
    this.tamanho++;
    this.valorFonte = this.tamanho+'px';
  }
  public mudarFonte() {
    this.validaFonte = !this.validaFonte;
  }
  public mudarCor() {
    this.validaCor = !this.validaCor;
  }
}
