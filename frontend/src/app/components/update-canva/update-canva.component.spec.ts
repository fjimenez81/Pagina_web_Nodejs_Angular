import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCanvaComponent } from './update-canva.component';

describe('UpdateCanvaComponent', () => {
  let component: UpdateCanvaComponent;
  let fixture: ComponentFixture<UpdateCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
