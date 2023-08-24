import { Component, Input, OnInit } from "@angular/core";


@Component
({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit
{
	@Input()
	id: string = "";

	@Input()
	text: string = "";

	constructor() {}

	ngOnInit() {}

	with(object: any): CardComponent
	{
		let card = object as CardComponent;
		this.id = card.id;
		this.text = card.text;
		return this;
	}
}
