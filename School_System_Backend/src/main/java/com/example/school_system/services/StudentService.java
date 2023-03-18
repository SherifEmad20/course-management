package com.example.school_system.services;

import com.example.school_system.entities.Course;
import com.example.school_system.entities.Student;
import com.example.school_system.repositories.CourseRepo;
import com.example.school_system.repositories.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepo studentRepo;

    private final CourseRepo courseRepo;


    @Autowired
    public StudentService(StudentRepo studentRepo, CourseRepo courseRepo) {
        this.studentRepo = studentRepo;
        this.courseRepo = courseRepo;
    }

    public void SignUp(Student student) {
        studentRepo.save(student);
    }

    public ResponseEntity<Student> login(Student student) {

        boolean flag = false;

        for (int i = 0; i < studentRepo.findAll().size(); i++) {
            if (studentRepo.findAll().get(i).getEmail().equals(student.getEmail())
                    && studentRepo.findAll().get(i).getPassword().equals(student.getPassword())) {
                flag = true;
            }
        }

        if (flag) {
            return ResponseEntity.ok(student);

        } else
            return (ResponseEntity<Student>) ResponseEntity.internalServerError();
    }

    public List<Student> getStudents() {
        return studentRepo.findAll();
    }

    public void deleteStudent(Long id) {
        studentRepo.deleteById(id);
    }

    public void updateStudent(Long id, Student student) {
        for (int i = 0; i < studentRepo.findAll().size(); i++) {

            if (studentRepo.findAll().get(i).getId() == id) {
                studentRepo.findAll().get(i).setStudentName(student.getStudentName());
                studentRepo.findAll().get(i).setPassword(student.getPassword());
                studentRepo.findAll().get(i).setPhoneNumber(student.getPhoneNumber());
                studentRepo.findAll().get(i).setEmail(student.getEmail());
                studentRepo.findAll().get(i).setAddress(student.getAddress());
            }
            studentRepo.save(studentRepo.findAll().get(i));
        }
    }

    public Student assignStudentToCourse(Long studentId, Long courseId) {
        Student student = studentRepo.findById(studentId).get();
        Course course = courseRepo.findById(courseId).get();

        List<Course> courses = student.getCourses();
        courses.add(course);
        student.setCourses(courses);
        return studentRepo.save(student);
    }
}
