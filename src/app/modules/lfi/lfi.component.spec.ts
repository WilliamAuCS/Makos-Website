import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfiComponent } from './lfi.component';

describe('LfiComponent', () => {
  let component: LfiComponent;
  let fixture: ComponentFixture<LfiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
