import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreizeitComponent } from './freizeit.component';

describe('FreizeitComponent', () => {
  let component: FreizeitComponent;
  let fixture: ComponentFixture<FreizeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreizeitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreizeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
