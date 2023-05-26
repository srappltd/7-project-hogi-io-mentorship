/* time zone -------------------------*/
setInterval(function () {
    let dateTime = document.getElementById('time');
    let date = new Date();
    let today = `${date.getDate()}, ${date.getFullYear()}`;

    let hour = date.getHours();
    let min = date.getMinutes();
    let sc = date.getSeconds();

    // let time = `${hour} : ${"0"+min} : ${sc}`;

   

    if (dateTime) {
        if(hour<10&&min<10 && sc<10){
        
            let time = `${"0"+hour} : ${"0"+min} : ${"0"+sc}`;
            dateTime.innerText = `${time}`;
        }else{
            let time = `${hour} : ${min} : ${sc}`;
            dateTime.innerText = `${time}`;
        }
    }
}, 1000);

let region = Intl.DateTimeFormat().resolvedOptions().timeZone;

if (document.getElementById("region")) {
    document.getElementById("region").innerHTML = region.split('/')[1];
}


// loading the screen
setTimeout(() => {
    document.querySelector("#loading").style.opacity = "0"
}, 1900);setTimeout(() => {
    document.querySelector("#loading").style.scale = "0"
}, 3000);