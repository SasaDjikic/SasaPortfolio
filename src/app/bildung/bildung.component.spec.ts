import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BildungComponent } from './bildung.component';

describe('BildungComponent', () => {
  let component: BildungComponent;
  let fixture: ComponentFixture<BildungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BildungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BildungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
