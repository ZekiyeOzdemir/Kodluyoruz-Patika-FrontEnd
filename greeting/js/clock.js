let fullName = prompt("Ad: ");
let myName = document.querySelector("#myName");
myName.innerHTML = fullName;

let myClock = document.querySelector("#myClock");
showTime();
function showTime(){
    setInterval(()=>{
    const weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let tarih = new Date();
    let fullDate = weekdays[tarih.getDay()];
    let saat = ((tarih.getHours() < 10) ? '0' : '') + tarih.getHours() + ":" + ((tarih.getMinutes() < 10) ? '0' : '') + tarih.getMinutes() +":" + ((tarih.getSeconds() < 10) ? '0' : '') + tarih.getSeconds();
    myClock.innerHTML = `${saat}  ${fullDate}`;
    },1000);    

}
