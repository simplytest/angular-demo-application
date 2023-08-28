import { Component } from "../classes/Component";
import { ProfileRowComponent } from "src/app/profile-row/profile-row.component";

export class Profile extends Component<ProfileRowComponent>  {
	private id: string;
	private name: string;
	private description: string;
	private canFollow: boolean;

	constructor(object: any) {
		super(ProfileRowComponent);
		let instance = this.getInstance();
		let profile = object as Profile;
		this.id = profile.id;
		this.name = profile.name;
		this.description = profile.description;
		this.canFollow = profile.canFollow;
		
		instance = instance.with({
			id: this.id,
			name: this.name,
			description: this.description,
			canFollow: this.canFollow
		});
		this.update();
	}

	static getComponent(): typeof ProfileRowComponent {
		return ProfileRowComponent;
	}
	
	getImage(): HTMLImageElement {
		return this.getElement().querySelector("img");
	}

	getName(): HTMLDivElement {
		return this.getElement().querySelector("div.name");
	}

	getDescription(): HTMLSpanElement {
		return this.getElement().querySelector("span.description");
	}

	getFollowLink(): HTMLAnchorElement {
		return this.getElement().querySelector("a#follow");
	}

	clickOnFollow() {
		this.getFollowLink().click();
	}
}
