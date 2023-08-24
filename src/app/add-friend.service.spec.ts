import { AddFriendService } from "./add-friend.service";
import { TestBed } from "@angular/core/testing";


describe("AddFriendService", () => {
	let service: AddFriendService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AddFriendService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
