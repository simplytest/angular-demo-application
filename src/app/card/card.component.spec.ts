import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardComponent } from "./card.component";
import { MatIcon } from "@angular/material/icon";

describe("CardComponent", () => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				CardComponent,
				MatIcon
			]
		});
		fixture = TestBed.createComponent(CardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
