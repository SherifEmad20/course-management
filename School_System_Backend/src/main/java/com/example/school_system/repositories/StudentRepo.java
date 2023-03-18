package com.example.school_system.repositories;

import com.example.school_system.entities.Course;
import com.example.school_system.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

}
