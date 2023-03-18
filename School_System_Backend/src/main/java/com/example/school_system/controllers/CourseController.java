package com.example.school_system.controllers;

import com.example.school_system.entities.Course;
import com.example.school_system.services.CourseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/course")
public class CourseController {
    private final CourseService courseService;
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/addCourse")
    public void addCourse(@RequestBody Course course) {
        courseService.addCourse(course);
    }

    @GetMapping("/getCourses")
    public List<Course> getCourses() {
        return courseService.getCourses();
    }

    @PutMapping("/updateCourse/{id}")
    public void updateCourse(@PathVariable("id") Long id, @RequestBody Course course) {
        courseService.updateCourse(id, course);
    }

    @DeleteMapping("/deleteCourse/{id}")
    public void deleteCourse(@PathVariable("id") Long id) {
        courseService.deleteCourse(id);
    }

}
