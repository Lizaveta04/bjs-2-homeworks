//Функция проверки.
function testCase() {
	let phoneAlarm;
	phoneAlarm = new AlarmClock();
	phoneAlarm.addClock('09:00', () => console.log('Пора вставать!'), 1);
	phoneAlarm.addClock('09:01', () => {
		console.log('Давай, вставай уже!'); 
		phoneAlarm.removeClock(2);
	}, 2);
	phoneAlarm.addClock('09:01', () => console.log('Иди умываться!'));
	phoneAlarm.addClock('09:02', () => {
		console.log('Вставай, а то проспишь!'); 
		phoneAlarm.clearAlarms();
		phoneAlarm.printAlarms();
	}, 3);
	phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!'), 1);
	phoneAlarm.printAlarms();
	phoneAlarm.start();
}
testCase();
