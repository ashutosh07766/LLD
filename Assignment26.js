class Student {
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
}

class College {
    constructor() {
        this.students = [];
    }

    enroll(student) {
        this.students.push(student);
    }

    getAll() {
        return this.students;
    }
}

class Printer {
    printAll(students) {
        students.forEach(s => {
            console.log(`ID: ${s.id}, Name: ${s.name}, Course: ${s.course}`);
        });
    }
}

const college = new College();
const printer = new Printer();

college.enroll(new Student(1, "Alice", "CS"));
college.enroll(new Student(2, "Bob", "ME"));
college.enroll(new Student(3, "Charlie", "Math"));

console.log("Students in College:");
printer.printAll(college.getAll());
class Student {
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
}

class College {
    constructor() {
        this.students = [];
    }

    enroll(student) {
        this.students.push(student);
    }

    getAll() {
        return this.students;
    }
}

class Printer {
    printAll(students) {
        students.forEach(s => {
            console.log(`ID: ${s.id}, Name: ${s.name}, Course: ${s.course}`);
        });
    }
}

const college = new College();
const printer = new Printer();

college.enroll(new Student(1, "Ashutosh", "CS"));
college.enroll(new Student(2, "Upwan", "AI"));
college.enroll(new Student(3, "Utkarsh", "IT"));

printer.printAll(college.getAll());
