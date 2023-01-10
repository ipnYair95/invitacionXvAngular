import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTextComponent } from './hr-text.component';

describe('HrTextComponent', () => {
  let component: HrTextComponent;
  let fixture: ComponentFixture<HrTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
