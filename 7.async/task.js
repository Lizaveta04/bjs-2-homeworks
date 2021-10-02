class AlarmClock {
	constructor(alarmCollection, timerId) { //Выделяет память для объекта.
		//Создайте свойство для хранения коллекции звонков alarmCollection с начальным значением пустого массива.
		this.alarmCollection = [];
		//Создайте свойство timerId для хранения id таймера без начального значения.
		this.timerId = null;
	}
	addClock(time, callback, id) { //Добавляет новый звонок в коллекцию существующих. 
		//Принимает параметр времени в формате HH:MM - время, когда должно запуститься действие.
		//Принимает параметр функции-колбека - действие, которое должно запуститься.
		//Принимает параметр идентификатора создаваемого звонка.

		//Проверьте, передан ли параметр id. Если параметр не передан, выполните выброс ошибки (с помощью throw new Error('error text')).
		if (id === undefined) {
			throw new Error('Параметр идентификатора создаваемого звонка не передан.');
		}
		//Проверьте, есть ли какой-нибудь звонок с уже существующим id. Если есть, выведите ошибку (с помощью console.error()) и завершите выполнение метода. Программа должна продолжать работать, но звонок не должен быть добавлен.
		if (this.alarmCollection.some((clock) => clock.id === id)) {
			return console.error('Звонок с таким идентификатором уже существует');
		} 
		//Перед завершением метода добавьте в массив звонков объект со свойствами id, time, callback.
		let clock = {
			time,
			callback,
			id,
		}
		this.alarmCollection.push(clock);
	}
	removeClock(id) { //Удаляет определённый звонок.
		//Принимает id звонка, который следует удалить.

		//Удалите из массива звонков тот, у которого id совпадает с текущим. Например, можно использовать метод filter.
		//Верните логическое значение об успешности/провале удаления объекта звонка из общего массива.
		let clockStorage = this.alarmCollection.length;
		let newClockStorage = this.alarmCollection.filter((clock) => clock.id === id);
		if (clockStorage !== newClockStorage.length) {
			return true;
		} else {
			return false;
		}
	}
	getCurrentFormattedTime() { //Возвращает текущее время в строковом формате HH:MM.
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}
	start()	{ //Запускает все звонки.
		//Создайте функцию проверки (checkClock), которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.
		const checkClock = (clock) => {
			if (clock.getCurrentFormattedTime() === clock.time) {
				return clock.callback();
			}
		}
		//Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
		//В этом интервале реализуйте функцию, которая будет перебирать все звонки, и для каждого вызывать функцию checkClock.
		//Результат функции setInterval сохраните в свойстве идентификатора текущего таймера.
		if (this.timerId === null) {
			const func = () => this.alarmCollection.forEach((clock) => clock.checkClock());
			return this.timerId = setInterval(func);
		}
	}
	stop() { //Останавливает выполнение всех звонков.
		//Сделайте проверку существования идентификатора текущего таймера.
		//Если у идентификатора текущего таймера есть значение, то вызовите функцию clearInterval для удаления интервала, а так же удалите значение из свойства "идентификатор текущего таймера".
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
		return;
	}
	printAlarms() { //Печатает все звонки.
		//С помощью метода forEach выведите информацию о каждом звонке (id и time).
		return this.alarmCollection.forEach((clock) => {
			console.log('Параметр идентификатора создаваемого звонка: ' + clock.id + ', параметр времени: ' + clock.time + '.');
		});
	}
	clearAlarms() { //Удаляет все звонки.
		//Вызывает метод остановки интервала.
		clearInterval(this.timerId);
		//Удаляет все звонки.
		this.alarmCollection.length = 0;
	}
}