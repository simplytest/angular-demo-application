import { AddFriendService } from "../add-friend.service";
import { Component, Input, OnInit } from "@angular/core";

@Component ({
	selector: "app-profile-row",
	templateUrl: "./profile-row.component.html",
	styleUrls: ["./profile-row.component.scss"]
})
export class ProfileRowComponent implements OnInit {
	@Input()
	id: number = 0;

	@Input()
	name: string = "";

	@Input()
	description: string = "";

	@Input()
	canFollow: boolean = true;

	addFriend(name: string, description: string, id: number) {
		let result = this.friendService.addFriend(name, description, id);
		
		if(result == 200)
			this.canFollow = false;

		else if(result == 400)
			alert("Du kannst nicht mehr als 3 Freunde haben.");

		else
			alert("Unerwarteter Fehler");
	}

	constructor(public friendService: AddFriendService) {}

	ngOnInit(): void {}

	with(object: any): ProfileRowComponent {
		let profile = object as ProfileRowComponent;
		this.id = profile.id;
		this.name = profile.name;
		this.description = profile.description;
		this.canFollow = profile.canFollow;
		return this;
	}
}
