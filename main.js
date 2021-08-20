document.addEventListener('DOMContentLoaded', function Time() {
  
    var days = document.querySelector('.days span');
    var nextdays = document.querySelector('.nextdays');
    var hour = document.querySelector('.hour');
    var nexthour = document.querySelector('.nexthour');
    var nextphut = document.querySelector('.nextphut');
    var nextgiay = document.querySelector('.nextgiay');
    var min = document.querySelector('.min');
    var second = document.querySelector('.second');
    var i = 1;
    var startDate = new Date(2018, 12, 02,00,00,00);
    days.innerText = Math.floor(((new Date - startDate)/86400000)+31);
    nextdays.innerText = Math.floor(((new Date - startDate)/86400000)+32);
    nexthour.innerText = Math.floor((((new Date - startDate) / 86400000)+31)*24);
    nextphut.innerText = Math.floor((((new Date - startDate) / 86400000)+31)*24*60);
    nextgiay.innerText = Math.floor((((new Date - startDate) / 86400000)+31)*24*60*60);

  

    setInterval(Time, 1000);
  
    function Totaltime() {
    
      let ms = (new Date - startDate) % 86400000;
      
      hour.innerText = Math.floor(ms / 3600000);
      min.innerText = Math.floor(ms % 3600000 / 60000);
      second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
    }
  
    setInterval(Totaltime, 1000);
  
  }, false);