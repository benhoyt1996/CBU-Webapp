import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDisplayComponent } from './building-display.component';

describe('BuildingDisplayComponent', () => {
  let component: BuildingDisplayComponent;
  let fixture: ComponentFixture<BuildingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
