import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocePortafolioComponent } from './conoce-portafolio.component';

describe('ConocePortafolioComponent', () => {
  let component: ConocePortafolioComponent;
  let fixture: ComponentFixture<ConocePortafolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocePortafolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocePortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
