function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

//const student1 = new Student("Tony", "male", 37);
//const student2 = new Student("Buzz", "female", 35);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  //student1.subject = "Algebra";
  //student2.subject = "Geometry";
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
  	this.marks = [];
  }
  	this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
	this.marks = marks;
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
  	sum += this.marks[i];
  }
  let n = this.marks.length;
  let avg = sum / n;
  this.getAverage = avg;
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
}

