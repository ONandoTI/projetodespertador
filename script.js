let alarmTime;

function setAlarm() {
  alarmTime = document.getElementById("alarmTime").value;
  alert("Alarme definido para " + alarmTime);
  checkTime();
}

function checkTime() {
  const interval = setInterval(() => {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);

    if (currentTime === alarmTime) {
      alert("⏰ Hora do alarme!");
      clearInterval(interval);
    }
  }, 1000);
}
