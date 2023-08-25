import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Type } from "@angular/core";


export class Component<T> {

	protected readonly fixture: ComponentFixture<T>;

	constructor(component: Type<T>) {
		this.fixture = TestBed.createComponent(component);
		this.update();
	}

	get(): ComponentFixture<T> {
		return this.fixture;
	}

	getElement(): any {
		return this.fixture?.nativeElement;
	}

	getInstance(): T {
		return this.fixture?.componentInstance;
	}

	public update() {
		this.fixture?.detectChanges();
	}

	public static update(...components: Component<any>[]) {
		for(let component of components) {
			component?.get().detectChanges();
		}
	}
}
