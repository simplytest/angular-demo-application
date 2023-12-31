import { Component } from "../classes/Component";
import { FriendBoxComponent } from "src/app/friend-box/friend-box.component";

export class FriendBox extends Component<FriendBoxComponent> {
	constructor() {
		super(FriendBoxComponent);
	}

	static getComponent(): typeof FriendBoxComponent {
		return FriendBoxComponent;
	}

	getFriendList(): HTMLDivElement {
		return this.getElement().querySelector("div.friend") as HTMLDivElement;
	}

	getFriendNodes(): NodeList {
		return this.getElement().querySelectorAll("div.friend") as NodeList;
	}

	beingEmtpy(): boolean {
		return this.lengthBeing(0);
	}

	lengthBeing(length: number): boolean {
		this.update();
		let instance = this.getInstance();
		let namesLength = instance.friendService.names.length == length;
		let textsLength = instance.friendService.texts.length == length;
		let imagesLength = instance.friendService.images.length == length;
		return namesLength && textsLength && imagesLength;
	}
}
