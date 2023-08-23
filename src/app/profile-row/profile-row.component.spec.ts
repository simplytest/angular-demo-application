import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRowComponent } from './profile-row.component';

describe('ProfileRowComponent', () => {
  let component: ProfileRowComponent;
  let fixture: ComponentFixture<ProfileRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileRowComponent]
    });
    fixture = TestBed.createComponent(ProfileRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
