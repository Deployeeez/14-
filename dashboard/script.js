// ВАЖНЫЕ ДАТЫ

// 1. Начало отношений: 17 сентября 2022
const loveStartDate = new Date("2022-09-17T00:00:00"); 

// 2. ДР Михаила: 16 сентября 2006
const aathilBirthday = new Date("2006-09-16T00:00:00"); 

// 3. ДР Валерии: 07 ноября 2006
const duckyBirthday = new Date("2006-11-07T00:00:00"); 

// ДАЛЕЕ КОД БЕЗ ИЗМЕНЕНИЙ
function updateAllCounters() {
  const now = new Date();
  updateLoveDuration(now);
  updateNextAnniversary(now);
  updateBirthdayCountdown(now, aathilBirthday, "aathil");
  updateBirthdayCountdown(now, duckyBirthday, "ducky");
}

function updateLoveDuration(now) {
  const difference = now - loveStartDate;
  
  const loveStartYear = loveStartDate.getFullYear();
  const currentYear = now.getFullYear();
  let years = currentYear - loveStartYear;
  
  const tempDate = new Date(loveStartDate);
  tempDate.setFullYear(currentYear);
  if (now < tempDate) {
    years--;
  }
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById("love-years").textContent = years;
  document.getElementById("love-days").textContent = days;
  document.getElementById("love-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("love-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("love-seconds").textContent = seconds.toString().padStart(2, "0");
}

function updateNextAnniversary(now) {
  const nextAnniv = new Date(loveStartDate);
  nextAnniv.setFullYear(now.getFullYear());
  
  if (now > nextAnniv) {
    nextAnniv.setFullYear(now.getFullYear() + 1);
  }
  
  const difference = nextAnniv - now;
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById("anniv-days").textContent = days;
  document.getElementById("anniv-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("anniv-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("anniv-seconds").textContent = seconds.toString().padStart(2, "0");
}

function updateBirthdayCountdown(now, birthday, prefix) {
  const nextBday = new Date(birthday);
  nextBday.setFullYear(now.getFullYear());
  
  if (now > nextBday) {
    nextBday.setFullYear(now.getFullYear() + 1);
  }
  
  const difference = nextBday - now;
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  
  document.getElementById(`${prefix}-days`).textContent = days;
  document.getElementById(`${prefix}-hours`).textContent = hours.toString().padStart(2, "0");
  document.getElementById(`${prefix}-minutes`).textContent = minutes.toString().padStart(2, "0");
}

updateAllCounters();
setInterval(updateAllCounters, 1000);
