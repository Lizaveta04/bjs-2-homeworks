function parseCount(text) {
	const parsed = Number.parseInt(text);
	if (Number.isNaN(parsed)) {
		throw new Error("Невалидное значение");
	}
	return parsed;
}

function validateCount(text) {
	try {
		const parsed = parseCount(text);
		return parsed;
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
		const P = this.a + this.b + this.c;
		return P;
	}
	getArea() {
		const p = P / 2;
		const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(S.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (err) {
		
	}
}