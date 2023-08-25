import { AppComponent } from "../app/app.component";
import { CardComponent } from "../app/card/card.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FriendBoxComponent } from "../app/friend-box/friend-box.component";
import { HeaderComponent } from "../app/header/header.component";
import { MatIcon } from "@angular/material/icon";
import { ProfileRowComponent } from "../app/profile-row/profile-row.component";
import { ProposalsComponent } from "../app/proposals/proposals.component";


describe("CustomTests", () => {

	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	
	beforeEach(async() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				CardComponent,
				FriendBoxComponent,
				HeaderComponent,
				MatIcon,
				ProfileRowComponent,
				ProposalsComponent
			],
			imports: [],
			providers: []
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should be called", () => {
		expect(component).toBeTruthy();
	});
});
