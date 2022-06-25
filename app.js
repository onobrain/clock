class setTime{
    date = new Date();
    hours = document.querySelector(".hours h1")
    minutes = document.querySelector(".minutes h1")
    seconds = document.querySelector(".seconds h1")
    months = document.getElementById("calandar")
    constructor(){
        this.getTime();
    }
    
    getTime(){
        this.hours.innerHTML = this.date.getHours();
        this.minutes.innerHTML = this.date.getMinutes();
        this.seconds.innerHTML = this.date.getSeconds();
        this.months.innerHTML = this.date.getDay() +"-"+  parseInt(this.date.getMonth() + 1) +"-"+ this.date.getFullYear()
    }

}

setInterval(()=>{
    onload = new setTime()   
})

function setColor(){
    let color = document.getElementById("getColor").value;
    localStorage.setItem("color",color);
    document.querySelector("#header").style.background = localStorage.getItem("color")
    document.querySelector("#clock").style.background = localStorage.getItem("color")
    document.querySelector(".outerBox").style.background = localStorage.getItem("color")
    document.querySelector(".time").style.background = localStorage.getItem("color")
}