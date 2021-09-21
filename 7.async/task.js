class AlarmClock {
	constructor(alarmCollection, timerId) {
		//Создайте свойство для хранения коллекции звонков alarmCollection с начальным значением пустого массива.
		this.alarmCollection = [];
		//Создайте свойство timerId для хранения id таймера без начального значения.
		this.timerId = null;
	}
	addClock(time, callback, id) {
		//Проверьте, передан ли параметр id. Если параметр не передан, выполните выброс ошибки (с помощью throw new Error('error text')).
		if (id === undefined) {
			throw new Error('error text');
		}
		//Проверьте, есть ли какой-нибудь звонок с уже существующим id. Если есть, выведите ошибку (с помощью console.error()) и завершите выполнение метода. Программа должна продолжать работать, но звонок не должен быть добавлен.
		if (this.alarmCollection.some((clock) => clock.id === id)) {
			console.error('Звонок с таким идентификатором уже существует');
			return;
		} 
		//Перед завершением метода добавьте в массив звонков объект со свойствами id, time, callback.
		let clock = {
			time,
			callback,
			id,
		}
		this.alarmCollection.push(clock);
	}
	removeClock(id) {
		//Удалите из массива звонков тот, у которого id совпадает с текущим. Например, можно использовать метод filter.
		//Верните логическое значение об успешности/провале удаления объекта звонка из общего массива.
		return this.alarmCollection.splice(this.alarmCollection.filter((clock) => clock.id === id));
	}
	getCurrentFormattedTime(time) {
		//Верните текущее время в строковом формате HH:MM.
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}
	start() {
		//Создайте функцию проверки (checkClock), которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.
		const checkClock = (clock) => {
			this.getCurrentFormattedTime === clock.time;
			callback(clock);
		}
		//Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
		//В этом интервале реализуйте функцию, которая будет перебирать все звонки, и для каждого вызывать функцию checkClock.
		//Результат функции setInterval сохраните в свойстве идентификатора текущего таймера.
		if (this.timerId === undefined) {
			const func = (clock) => {
				this.alarmCollection.every((clock) => checkClock(clock));
			}
			return this.timerId = setInterval(func);
		}
	}
	stop() {
		//Сделайте проверку существования идентификатора текущего таймера.
		//Если у идентификатора текущего таймера есть значение, то вызовите функцию clearInterval для удаления интервала, а так же удалите значение из свойства "идентификатор текущего таймера".
		if (this.timerId === !undefined) {
			clearInterval();
			delete this.timerId;
		}
	}
	printAlarms() {
		//С помощью метода forEach выведите информацию о каждом звонке (id и time).
	}
	clearAlarms() {
		//Вызывает метод остановки интервала.
		//Удаляет все звонки.
		clearInterval();
	}
}