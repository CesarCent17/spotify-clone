import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLibraryComponent } from './side-library.component';

describe('SideLibraryComponent', () => {
  let component: SideLibraryComponent;
  let fixture: ComponentFixture<SideLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideLibraryComponent]
    });
    fixture = TestBed.createComponent(SideLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
