import { AddFriendService } from "../add-friend.service";
import { Component, OnInit } from "@angular/core";

@Component ({
	selector: "app-friend-box",
	templateUrl: "./friend-box.component.html",
	styleUrls: ["./friend-box.component.scss"]
})
export class FriendBoxComponent implements OnInit {
	names: string[] = [];
	texts: string[] = [];
	images: number[] = [];

	constructor(public friendService: AddFriendService) {}

	ngOnInit() {}
}
