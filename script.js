function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var se="AM";
    if(h==0)
    {
        h=12;
    }
    if (h>12){
        h=h-12;
        se="PM";
    }
    if(h<10){
        h="0"+h;
    }
    if (m<10)
    {
        m="0"+m;
    }
    if (s<10){
        s="0"+s;
    }
    if (h==12){
        se="PM";
    }
    var time = h+":"+m+":"+s+" "+se;
    document.getElementById("MYclockDisplay").innerText = time;
    document.getElementById("MYclockDisplay").textContent=time;

    setTimeout(showTime,1000);
}
showTime()

const dayNumber = new Date().getDate();
    const year = new Date().getFullYear();
    const dayName = new Date().toLocaleString("default", {weekday: "long"});
    const monthName = new Date().toLocaleString("default", {month: "long"});

    document.querySelector(".month-name").innerHTML = monthName;
    document.querySelector(".day-name").innerHTML = dayName;
    document.querySelector(".date-number").innerHTML = dayNumber;
    document.querySelector(".year").innerHTML = year;