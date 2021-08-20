document.addEventListener('DOMContentLoaded', function Time() {
  
    var days = document.querySelector('.days span');
    var now = document.querySelector('.now');
    var nextdays = document.querySelector('.nextdays');
    var hour = document.querySelector('.hour');
    var nexthour = document.querySelector('.nexthour');
    var nextphut = document.querySelector('.nextphut');
    var nextgiay = document.querySelector('.nextgiay');
    var min = document.querySelector('.min');
    var second = document.querySelector('.second');
    var startDate = new Date(2018, 12, 02,00,00,00);
  
    nextdays.innerText = Math.floor(((new Date - startDate)/86400000)+31);
    nexthour.innerText = Math.floor((((new Date - startDate) / 86400000)+31)*24);
    nextphut.innerText = Math.floor((((new Date - startDate) / 86400000)+31)*24*60);
    nextgiay.innerText = Math.floor((((new Date - startDate) / 86400000)+31)*24*60*60);
    

    setInterval(Time, 1000);

    
  
  }, false);