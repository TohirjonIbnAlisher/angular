import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyDashboard } from './study-dashboard';

describe('StudyDashboard', () => {
  let component: StudyDashboard;
  let fixture: ComponentFixture<StudyDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
