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
  let marks = [];
  if(this.marks === undefined) {
  	marks.push(mark[0]);
  } else {
  	marks.push(mark[1]);
  	marks.push(mark[2]);
  	marks.push(mark[3]);
  }
}

Student.prototype.addMarks = function (...marks) {

}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
  	sum += marks[i];
  }
  let n = marks.length;
  let avg = sum / n;
  this.average = avg;
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
}

