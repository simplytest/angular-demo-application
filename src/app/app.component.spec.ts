import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";


describe("AppComponent", () => {

	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
			declarations: [AppComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should be created", () => {
		expect(component).toBeTruthy();
	});
});
