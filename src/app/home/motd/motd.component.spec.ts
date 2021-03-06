import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdComponent } from './motd.component';

describe('MotdComponent', () => {
  let component: MotdComponent;
  let fixture: ComponentFixture<MotdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
