# Student Management System

## Project Overview
The Student Management System is a Python-based console application developed using Object-Oriented Programming (OOP) concepts. It helps manage student and faculty information, track attendance, and calculate academic results.

## Features
- **Add Students:** Store student details, department, attendance, and subject marks.
- **View Students:** Display student information and academic performance.
- **Add Faculty:** Register faculty details, department, and designation.
- **View Faculty:** Display registered faculty information.
- **Attendance Management:** Validate attendance percentage and check examination eligibility.
- **Academic Results:** Calculate total marks, average marks, grades, and pass/fail status.
- **Input Validation:** Validate student attendance within the range of 0–100%.
- **Menu-Driven Interface:** Navigate through the application using a simple console menu.

## Technologies Used
- Python
- Object-Oriented Programming (OOP)
- Python Dictionaries
- Conditional Statements and Loops
- Functions and Methods

## OOP Concepts Used
- **Inheritance:** The `Student` and `Faculty` classes inherit common attributes from the `Person` class.
- **Constructors:** The `__init__()` method initializes object attributes.
- **Encapsulation:** Student and faculty information is managed through class attributes and methods.
- **Code Reusability:** Common personal information is defined in the parent class.

## Academic Evaluation
The system manages marks for three subjects:
- Python
- SQL
- Excel

It calculates total marks, average marks, grades, and pass/fail results. Students with attendance of 75% or above are considered eligible for examinations.

## How to Run the Project

1. Install Python on your computer.
2. Save the source code as `student_management.py`.
3. Open a terminal or command prompt in the project folder.
4. Run the following command:

```bash
python student_management.py
```

5. Select an option from the menu to manage students, faculty, attendance, and academic results.

## Project Structure

```text
Student-Management-System/
│
├── Screenshots/
│   ├── Add_Faculty_Details.png
│   ├── Add_Student.png
│   ├── Attendance_Eligiblity.png
│   ├── Choice_Show_In_Terminal.png
│   ├── End_The_Program.png
│   ├── View_Faculties_Details.png
│   ├── View_Results_Of_Students.png
│   └── View_Students_Details.png
├── student_management.py
└── README.md
```


## Application Screenshots

The following screenshots demonstrate the main features and console output of the Student Management System.

### Main Menu
![Main Menu](Screenshots/Choice_Show_In_Terminal.png)

### Add Student
![Add Student](Screenshots/Add_Student.png)

### View Student Details
![View Student Details](Screenshots/View_Students_Details.png)

### Add Faculty
![Add Faculty Details](Screenshots/Add_Faculty_Details.png)

### View Faculty Details
![View Faculty Details](Screenshots/View_Faculties_Details.png)

### Attendance Eligibility Check
![Attendance Eligibility](Screenshots/Attendance_Eligiblity.png)

### View Academic Results
![Student Academic Results](Screenshots/View_Results_Of_Students.png)

### Exit the Program
![Exit Program](Screenshots/End_The_Program.png)

## Future Enhancements
- Add student and faculty record update and delete options.
- Implement input validation for marks, email, and phone numbers.
- Store records permanently using a database such as MySQL or SQLite.
- Add a graphical user interface (GUI).
- Introduce login authentication for administrators and faculty.

## Conclusion
The Student Management System demonstrates the practical application of Python programming and OOP concepts. It provides a simple way to manage student and faculty records, monitor attendance, and evaluate academic performance.

## Author
Developed as a Python programming project to practice Object-Oriented Programming and basic student record management.
