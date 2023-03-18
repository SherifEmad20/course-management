package com.example.school_system.services;

import com.example.school_system.entities.Course;
import com.example.school_system.repositories.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    CourseRepo courseRepo;

    @Autowired
    public CourseService(CourseRepo courseRepo) {
        this.courseRepo = courseRepo;
    }

    public void addCourse(Course course) {
        courseRepo.save(course);
    }

    public List<Course> getCourses() {
        return courseRepo.findAll();
    }

    public void deleteCourse(Long id) {
        courseRepo.deleteById(id);
    }

    public void updateCourse(Long id, Course course) {
        for (int i = 0; i < courseRepo.findAll().size(); i++) {

            if (courseRepo.findAll().get(i).getId() == id) {
                courseRepo.findAll().get(i).setCourseName(course.getCourseName());
                courseRepo.findAll().get(i).setCourseCode(course.getCourseCode());
            }
            courseRepo.save(courseRepo.findAll().get(i));
        }
    }
}
