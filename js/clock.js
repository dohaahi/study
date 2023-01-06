const clock = document.getElementById('clock');

function getClock() {
  const date = new Date();
  
  //01 형식으로 출력 변경
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //웹페이지가 로드되면 바로 시간이 보이도록 getClock를 직접 호출
setInterval(getClock, 1000);