import { Component, OnInit } from "@angular/core";


@Component ({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	readonly title: string;
	postImg: string[];
	postText: string[];

	constructor() {
		this.title = "angular-demo-application";
		this.postImg = [];
		this.postText = [];
	}

	ngOnInit() {
		this.postImg.push("0", "1", "2", "3", "4", "5");
		this.postText.push(
			"This is a card.",
			"That is also a card.",
			"This is anonther card.",
			"That is the fourth card. ",
			"This is the fifth card.",
			"That is the last card."
		);
	}
}
