import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtressComponent } from './buttress.component';

describe('ButtressComponent', () => {
  let component: ButtressComponent;
  let fixture: ComponentFixture<ButtressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
