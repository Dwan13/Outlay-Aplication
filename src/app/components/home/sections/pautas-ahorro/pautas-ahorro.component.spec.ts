import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PautasAhorroComponent } from './pautas-ahorro.component';

describe('PautasAhorroComponent', () => {
  let component: PautasAhorroComponent;
  let fixture: ComponentFixture<PautasAhorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PautasAhorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PautasAhorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
