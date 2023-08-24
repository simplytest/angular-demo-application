import { Injectable } from "@angular/core";


@Injectable ({
	providedIn: "root"
})
export class AddFriendService {
	names: string[] = [];
	texts: string[] = [];
	images: number[] = [];

	getImage(index: number) {
		return `/assets/images/cards/${this.images[index]}.webp`;
	}

	addFriend(name: string, text: string, id: number): number {
		if(this.names.length >= 3)
			return 400;
		
		this.names.push(name);
		this.texts.push(text);
		this.images.push(id);
		return 200;
	}

	constructor() { }
}
