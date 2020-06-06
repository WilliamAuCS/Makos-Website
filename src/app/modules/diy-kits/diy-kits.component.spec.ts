import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DIYKitsComponent } from './diy-kits.component';

describe('DIYKitsComponent', () => {
  let component: DIYKitsComponent;
  let fixture: ComponentFixture<DIYKitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DIYKitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DIYKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
