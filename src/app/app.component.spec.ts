import { AppComponent } from "./app.component";
import { CardComponent } from './card/card.component';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FriendBoxComponent } from './friend-box/friend-box.component';
import { HeaderComponent } from './header/header.component';
import { MatIcon } from '@angular/material/icon';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { ProposalsComponent } from './proposals/proposals.component';

describe("AppComponent", () => {

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
	
	it("should be created", () => {
		expect(component).toBeTruthy();
	});
});
