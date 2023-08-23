import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FriendBoxComponent } from "./friend-box.component";


describe("FriendBoxComponent", () => {
	let component: FriendBoxComponent;
	let fixture: ComponentFixture<FriendBoxComponent>;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FriendBoxComponent]
		});
		fixture = TestBed.createComponent(FriendBoxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
