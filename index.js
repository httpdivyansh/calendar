const currentDate = document.querySelector(".current-date");

let date = new date(),
cueeyear = data.getFullYear(),
currMonth = date.getMonth();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const renderCalendar = () => {
    let lastDateofMonth = new Date(currYear, currMonth+1,0).getDate();
    let litag = --;

    for(let i=0;i<= lastDateofMonth; i++){
        console.log(i) 
    }
    currentDate.innerText = `${months[currMonth]} $(currYear)`;
}

renderCalendar()