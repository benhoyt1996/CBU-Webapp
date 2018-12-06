import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDisplayComponent } from './faculty-display.component';

describe('FacultyDisplayComponent', () => {
  let component: FacultyDisplayComponent;
  let fixture: ComponentFixture<FacultyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
