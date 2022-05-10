import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo06Component } from './exemplo06.component';

describe('Exemplo06Component', () => {
  let component: Exemplo06Component;
  let fixture: ComponentFixture<Exemplo06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
