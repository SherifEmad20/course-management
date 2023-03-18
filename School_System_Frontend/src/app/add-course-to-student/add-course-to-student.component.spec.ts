import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseToStudentComponent } from './add-course-to-student.component';

describe('AddCourseToStudentComponent', () => {
  let component: AddCourseToStudentComponent;
  let fixture: ComponentFixture<AddCourseToStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseToStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
