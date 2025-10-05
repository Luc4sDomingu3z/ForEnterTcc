import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmetaDashboard } from './newmeta-dashboard';

describe('NewmetaDashboard', () => {
  let component: NewmetaDashboard;
  let fixture: ComponentFixture<NewmetaDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewmetaDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmetaDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
