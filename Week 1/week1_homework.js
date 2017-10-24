class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(name, age, subject, experience) {
        super(name, age);
        this.subject = subject;
        this.experience = experience;
    }

    putAMark(child, mark) {
        console.log("Today " + child.name + " gets the mark " + mark);
        child.marks.push(mark);
    }

}

class Child extends Person {
    constructor(name, age, marks, subjects) {
        super(name, age);
        this.marks = [];
        this.subjects = [];
    }

    addSubject(subject) {
        this.subjects.push(subject);
    }
}

class Parent extends Person {
    constructor(name, age, children) {
        super(name, age);
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    getChildMarks(child) {
        return `Name: ${child.name};\nMarks: ${child.marks}`
    }
}

let MathTeacher = new Teacher('Anna', 34, 'math', 4);

let Liza = new Child('Liza', 13);
Liza.marks.push(4, 3, 5);
Liza.subjects.push('math');
Liza.subjects.push('physics');

MathTeacher.putAMark(Liza, 3);
console.log(Liza.marks);

let John = new Parent('John', 32)
John.addChild(Liza);
console.log(John.children);

console.log(John.getChildMarks(Liza));
