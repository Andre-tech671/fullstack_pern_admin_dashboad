import { BaseRecord } from '@refinedev/core';

// Type definition for Subject
export interface Subject extends BaseRecord {
  id: string;
  courseCode: string;
  name: string;
  department: string;
  description: string;
}

// Mock subject data for three university courses
export const mockSubjects: Subject[] = [
  {
    id: "1",
    courseCode: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Foundational concepts in computer science including algorithms, data structures, and programming fundamentals."
  },
  {
    id: "2",
    courseCode: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Advanced calculus topics including integration techniques, series, and applications to real-world problems."
  },
  {
    id: "3",
    courseCode: "PHYS150",
    name: "Physics for Engineers",
    department: "Physics",
    description: "Comprehensive study of mechanics, thermodynamics, and waves with practical engineering applications."
  }
];
