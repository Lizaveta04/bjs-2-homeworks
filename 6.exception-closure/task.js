function parseCount(text) {
	const parsed = Number.parseInt(text);
	if (Number.isNaN(parsed)) {
		throw new Error("Невалидное значение");
	}
	return parsed;
}

function validateCount(text) {
	try {
		return parseCount(text);
	} catch (err) {
		return err;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		const p = (this.a + this.b + this.c) / 2;
		const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(S.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (err) {
		return obj = {
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			},
		}
	}
}
