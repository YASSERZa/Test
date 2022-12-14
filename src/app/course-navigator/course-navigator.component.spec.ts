import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNavigatorComponent } from './course-navigator.component';

describe('CourseNavigatorComponent', () => {
  let component: CourseNavigatorComponent;
  let fixture: ComponentFixture<CourseNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
