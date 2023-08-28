import { AddFriends } from "./services/AddFriends";
import { Component } from "./classes/Component";
import { FriendBox } from "./components/FriendBox";
import { Profile } from "./components/Profile";
import { Spy } from "./classes/Spy";
import { TestBed } from "@angular/core/testing";

describe("Custom component tests:", () => {
	const TEMPLATE = {
		id: "1",
		name: "Robert",
		description: "Das ist mein Testprofil.",
		canFollow: true
	};
	let service: AddFriends;
	let friendBox: FriendBox;
	let profile: Profile;

	beforeEach(async() =>{
		TestBed.configureTestingModule({
			declarations: [FriendBox.getComponent(), Profile.getComponent()],
			providers: [AddFriends.getService()]
		}).compileComponents();
	});

	beforeEach(() => {		
		service = new AddFriends();
		friendBox = new FriendBox();
		profile = new Profile(TEMPLATE);
	});

	it("should render 'FriendBoxComponent' and 'ProfileRowComponent' (Test #1)", () => {
		Component.update(friendBox, profile);

		expect(friendBox.get()).toBeTruthy();
		expect(profile.get()).toBeTruthy();

		let image = profile.getImage();
		expect(image).toBeTruthy();
		expect(image.src).toContain(TEMPLATE.id + ".webp");
	
		let div = profile.getName();
		expect(div).toBeTruthy();
		expect(div.innerHTML).toContain(TEMPLATE.name);
		expect(div.innerHTML).toContain(TEMPLATE.description);
	
		let span = profile.getDescription();
		expect(span).toBeTruthy();
		expect(span.innerHTML).toContain(TEMPLATE.description);
		expect(span.innerText).toContain(TEMPLATE.description);

	});

	it("should invoke the 'AddFriendService' (Test #2)", () => {
		Spy.on(service, "addFriend");
		profile.clickOnFollow();
		expect(service.get().addFriend).toHaveBeenCalled();
	});

	it("should disable 'Folgen' link after clicking and see that 'FriendBoxComponent' has one friend (Test #3)", () => {
		expect(friendBox.beingEmtpy()).toBeTrue();
		
		profile.clickOnFollow();
		Component.update(friendBox, profile);
		expect(profile.getFollowLink()).toBeFalsy();
		
		let friends = friendBox.getFriendList();
		expect(friends).toBeTruthy();
		console.log(friends)

		expect(friends.innerHTML).toContain(TEMPLATE.name);

		let image = friends.querySelector("img");
		expect(image).toBeTruthy();
		expect(image?.src).toContain(TEMPLATE.id.concat(".webp"));
	})

	it("should not be able to add more than 3 profiles (Test #4)", () => {
		let profile1: Profile = new Profile(TEMPLATE);
		let profile2: Profile = new Profile(TEMPLATE);
		let profile3: Profile = new Profile(TEMPLATE);
		let profile4: Profile = new Profile(TEMPLATE);
		expect(friendBox.beingEmtpy()).toBeTrue();
		
		profile1.clickOnFollow();
		profile2.clickOnFollow();
		profile3.clickOnFollow();
		Component.update(friendBox, profile1, profile2, profile3);
		
		let friends = friendBox.getFriendNodes();
		expect(friends.length).toBe(3);
		expect(profile1.getFollowLink()).toBeFalsy();
		expect(profile2.getFollowLink()).toBeFalsy();
		expect(profile3.getFollowLink()).toBeFalsy();

		profile4.clickOnFollow();
		Component.update(friendBox, profile4);
		
		friends = friendBox.getFriendNodes();
		expect(friends.length).toBe(3);
		expect(profile4.getFollowLink()).toBeTruthy();
	})
});
