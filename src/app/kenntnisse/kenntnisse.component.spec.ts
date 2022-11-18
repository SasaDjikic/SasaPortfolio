import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenntnisseComponent } from './kenntnisse.component';

describe('KenntnisseComponent', () => {
  let component: KenntnisseComponent;
  let fixture: ComponentFixture<KenntnisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenntnisseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenntnisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
