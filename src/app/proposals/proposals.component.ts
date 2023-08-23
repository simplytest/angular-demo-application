import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-proposals",
	templateUrl: "./proposals.component.html",
	styleUrls: ["./proposals.component.scss"]
})
export class ProposalsComponent implements OnInit {
	names: string[] = [
		"First User",
		"Second User",
		"Third User",
		"Fourth User",
		"Fifth User",
		"Sixth User"
	];

	texts = [
		"This is a card.",
		"That is also a card.",
		"This is anonther card.",
		"That is the fourth card. ",
		"This is the fifth card.",
		"That is the last card."
	];

	images: number[] = [0, 1, 2, 3, 4, 5];

	constructor() {}

	ngOnInit() {}

	get(index: number) {
		return {
			name: this.names[index],
			text: this.texts[index],
			id: this.images[index]
		};
	}
}
