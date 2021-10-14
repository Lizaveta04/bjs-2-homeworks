//Функция проверки.
function testCase() {
	let phoneAlarm;
	phoneAlarm = new AlarmClock();
	phoneAlarm.addClock('14:18', () => console.log('Пора вставать!'), 1);
	phoneAlarm.addClock('14:19', () => {
		console.log('Давай, вставай уже!'); 
		phoneAlarm.removeClock(2);
	}, 2);
	phoneAlarm.addClock('14:20', () => {
		console.log('Вставай, а то проспишь!'); 
		phoneAlarm.clearAlarms();
		phoneAlarm.printAlarms();
	}, 3);
	phoneAlarm.printAlarms();
	phoneAlarm.start();
}
testCase();