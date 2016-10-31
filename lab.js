"use strict";

// Remember, this stuff is only for ES6 so it may not work in all browsers!
class Student {

    constructor(newName, newGPA, newMajor) {
        this.name = newName;
        this.gpa = newGPA;
        this.major = newMajor;
    }

    getName() {
        return this.name;
    }

    printGreeting() {
        console.log("Hi! My name is " + this.getName() + " and I'm a " + this.major + " student!");
    }

    setGpa(newGPA) {
        this.gpa = newGPA;
    }

    getGpa() {
        return this.gpa;
    }
}

// Problem 1:
// Initialize a new Student object with your name and major! However, set your GPA to be 3.5
var me = new Student("TA", 3.5, "Informatics");

// Problem 2:
// Initalize the following list of students as an Array
// "Cameron", 3.0, "Informatics"
// "Tim", 4.0, "CSE"
// "Luis", 3.0, "Informatics"
// 
var students = [
    new Student("Cameron", 3.0, "Informatics"),
    new Student("Tim", 4.0, "CSE"),
    new Student("Luis", 3.0, "Informatics")
];

// Problem 3:
// Fill in this function
// Note: student should be a single student object, and studentsToCompare should be an array of student objects
function printWorseGPA(student, studentsToCompare) {
    // This function should print out "______ has a worse GPA than ______"
    // for everyone in the "studentsToCompare" array
    // for example, with our data we should see (one example)"
    // "Cameron has a worse GPA than <YOUR NAME HERE>"

    // Note: I'm using lodash here, buy any loop would work
    var foundWorseGpa = false;
    _.forEach(studentsToCompare, function(stuToCompare){
        if(stuToCompare.getGpa() < student.getGpa()) {
            foundWorseGpa = true;
            console.log(stuToCompare.getName() + " has a worse GPA than " + student.getName());
        }
    });
    if(!foundWorseGpa) {
        console.log("No one has a worse GPA than you :(");
    }
}

// Problem 3.5
// Call printWorseGPA, passing in yourself and the array of students you created previously
printWorseGPA(me, students);

// Problem 4
// Whoops! Tim failed his midterm and is sad now :(
// Change his GPA to 2.0
// BONUS: Do this using lodash (already loaded) so you don't need to use an index (so, don't use array[X])

// Option 1:
// "regular" way: students[1].setGpa()

// Option 2:
// lodash way (best)
var tim = _.find(students, function(stu){
    return stu.getName() === "Tim";
});
tim.setGpa(2.0);

// Option 3:
// lodash, but compact (up to you, a bit harder to read for some, maybe not the best)
//_.find(students, function(stu){
//    return stu.getName() === "Tim";
//}).setGpa(2.0);

// Problem 5
// Write a function that calculates the students that are below the average GPA of all informatics students
// Print out their name followed by their GPA
// In other words:
// 1. Find the average GPA of all informatics students
// 2. Find all students who are below that GPA, and print them out
function printWorseGpaThanInfo(studentsToCompare) {
    var totalInfoStudents = 0;
    
    // this can also be done with a forEach, but this is an example of how you can use lodash's filter + reduce
    var totalGpa = _.filter(studentsToCompare, function(stu){
            if(stu.major === "Informatics"){
                totalInfoStudents++;
                return true;
            }
            // no point in comparing again for "boolean zen"
            return false;
        })
        .reduce(function(totalGpa, infoStu){
            return totalGpa + infoStu.getGpa();
        }, 0);

    var avgGpa = totalGpa / totalInfoStudents;

    _.forEach(studentsToCompare, function(stu){
        if (stu.getGpa() < avgGpa) {
            console.log(stu.getName() + " has a worse GPA than all info students");
        }        
    });
}

// Problem 5.5
// Call this function, passing in all 4 students as a single parameter
// HINT: You'll need to modify the array before passing it in, or better yet, create a new temporary array to hold everyone
students.push(me);
printWorseGpaThanInfo(students);