import { AddFriendService } from "src/app/add-friend.service";
import { TestBed } from "@angular/core/testing";


export class AddFriends {

	private readonly service: AddFriendService;

	constructor() {
		this.service = TestBed.inject(AddFriendService);
	}

	static getService(): typeof AddFriendService {
		return AddFriendService;
	}

	get(): AddFriendService {
		return this.service;
	}

}
