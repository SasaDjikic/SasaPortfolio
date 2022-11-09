import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoenlichComponent } from './persoenlich.component';

describe('PersoenlichComponent', () => {
  let component: PersoenlichComponent;
  let fixture: ComponentFixture<PersoenlichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoenlichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoenlichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
