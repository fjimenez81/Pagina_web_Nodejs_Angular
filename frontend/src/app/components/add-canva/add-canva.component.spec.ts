import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCanvaComponent } from './add-canva.component';

describe('AddCanvaComponent', () => {
  let component: AddCanvaComponent;
  let fixture: ComponentFixture<AddCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
