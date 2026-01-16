//ARRAY DECLARATION
let students=[];

//ADDING ELEMENTS TO ARRAY
students.push({id:1,name:"Kavyan"},
{id:2,name:"Aryan"},{id:3,name:"Ria"}
);

//DISPLAYING ALL STUDENTS
console.log("Student List:");
students.forEach(student=>{
    console.log( student.id, student.name);
});

//ITERATING USING FOR LOOP
console.log("Iterating using for loop:");
for(let i=0;i<students.length;i++){
    console.log(students[i].id,students[i].name);
}

//ITERATING USING FOR OF LOOP
console.log("Iterating using for...of loop:");      
for(let student of students){
    console.log(student.id,student.name);
}

//MAP METHOD
let studentNames=students.map(student=>student.name);
console.log("Student Names using map:",studentNames);

//FILTER METHOD
let filteredStudents=students.filter(student=>student.id>1);
console.log("Filtered Students (id>1):",filteredStudents);

//FIND METHOD
let foundStudent=students.find(student=>student.name==="Ria");
console.log("Found Student (name==='Ria'):",foundStudent);

//POP METHOD
let removedStudent=students.pop();
console.log("Removed Student using pop():",removedStudent);
console.log("Students after pop():",students);

//LENGTH PROPERTY
console.log("Number of Students:",students.length);

//UPDATE OBJECT VALUE
students[0].name="Kavya";
console.log("Updated Student List:",students);

//DELETE ELEMENT USING SPLICE
students.splice(0,1);   
console.log("Students after splice():",students);

//DELETE OBJECT PROPERTY
delete students[0].id;  
console.log("Students after deleting id property:",students);   

//ADDING NEW PROPERTY
students[0].age=22;     
console.log("Students after adding age property:",students);

//FINAL MESSAGE
console.log("Array operations executed successfully!");     
students.forEach(student=>
    console.log(student));