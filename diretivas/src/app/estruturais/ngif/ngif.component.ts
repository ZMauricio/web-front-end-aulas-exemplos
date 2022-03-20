import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  public curso: string = "Informática";
	public escola: string = "TechSchool";
	public exibir: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

	public mudar(): void {
		this.exibir = ! this.exibir;
	}
}
