package com.example.school_system.controllers;

import com.example.school_system.entities.Student;
import com.example.school_system.services.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/login")
    public ResponseEntity<Student> login(@RequestBody Student student) {
        return studentService.login(student);
    }

    @PostMapping("/signup")
    public void signup(@RequestBody Student student) {
        studentService.SignUp(student);
    }

    @GetMapping("/getStudents")
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @PutMapping("/update/{id}")
    public void updateStudent(@PathVariable("id") Long id, @RequestBody Student student) {
        studentService.updateStudent(id, student);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable("id") Long id) {
        studentService.deleteStudent(id);
    }

    @PutMapping("/{studentId}/addCourse/{courseId}")
    public void addCourse(@PathVariable("studentId") Long studentId, @PathVariable("courseId") Long courseId) {
        studentService.assignStudentToCourse(studentId, courseId);
    }
}
