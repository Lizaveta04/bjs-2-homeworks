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
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			} 
		return null;
		}
	}
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let arr = this.books.splice(i, 1);
				return arr[i];
			}
		}
		return null;
	}
}

//Задача 3
class Student {
	constructor(firstName, lastName, subject) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.subject = {};
	}
	addMark(mark, subjectName) {
		if (mark < 1 || mark > 5) {
			return 'Ошибка, оценка должна быть числом от 1 до 5.'
		} 
		if (this.subject[subjectName] === undefined) {
			this.subject[subjectName] = [];
		}
		this.subject[subjectName].push(mark); 
	}
	getAverageBySubject(subjectName) {
		if (subjectName === undefined) {
			return 'Несуществующий предмет.';
		}
		let sum = 0;
		for (let i = 0; i < this.subject[subjectName].length; i++) {
			sum += this.subject[subjectName][i];
		}
		let n = this.subject[subjectName].length;
		let avg = sum / n;
		return avg;		
	}
	getAverage() {
		let sum = 0;
		let n = 0;
		let marks = Object.values(this.subject);
		for (let i = 0; i < marks.length; i++) {
			let markList = marks[i];
			n += marks.length;
			for (let j = 0; j < markList.length; j++) {
				sum += markList[j];
			}
		}
		let avg = sum / n;
		return avg;	
	}
}
