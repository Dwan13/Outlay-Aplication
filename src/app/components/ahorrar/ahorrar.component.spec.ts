import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrarComponent } from './ahorrar.component';

describe('AhorrarComponent', () => {
  let component: AhorrarComponent;
  let fixture: ComponentFixture<AhorrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
