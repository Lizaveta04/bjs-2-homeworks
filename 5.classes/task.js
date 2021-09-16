//Задача 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
    }

    set state(newState) {
    	if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "detective";
	}
}

//Задача 2
class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		for (let i = 0; i < this.books.length, i ++) {
			if (this.books[i].name = this.books[i].value) {
				return this.books[i];
			} else {
				return null;
			}
		}
	}
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length, i ++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1);
			} else {
				return null;
			}
		}
	}
}

//Задача 3
class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	addMark(mark, subject) {
		let marks = [];
		if (mark > 1 && mark < 5) {
			marks.push(mark);
		} else {
			return "Ошибка, оценка должна быть числом от 1 до 5";
		}
		if (subject === undefined) {
			return "Несуществующий предмет";
		}
	}
	getAverageBySubject(subject) {
		let sum = 0;
		let n = this.marks.length;
		let avg = sum / n;
		for (let i = 0; i < this.marks, i++) {
			if (subject === undefined) {
				return 0;
			} else if {
				sum += this.marks[i];
			}
		}
		return avg;
	}
	getAverage(){

	}
}