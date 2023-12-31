import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProfileRowComponent } from "../profile-row/profile-row.component";
import { ProposalsComponent } from "./proposals.component";



describe("ProposalsComponent", () => {
	let component: ProposalsComponent;
	let fixture: ComponentFixture<ProposalsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				ProfileRowComponent,
				ProposalsComponent
			]
		});
		fixture = TestBed.createComponent(ProposalsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
