import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public curso: string = "Matemática";

  constructor() { }

  ngOnInit(): void {
  }

  public trocar(): void {
		this.curso = "Artes";
	}
}
