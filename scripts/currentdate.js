var d = new Date();

var day = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

var month = new Array(12);
month(0) = "January";
month(1) =  "Febuary";
month(2) = "March";
month(3) = "April";
month(4) = "May";
month(5) = "June";
month(6) = "July";
month(7) = "August";
month(8) = "Spetember";
month(9) = "October";
month(10) = "November";
month(11) = "December";
    
    
var currentDate= day[date.getDay()];
var currentMonth = month[date.getMonth()];


document.getElementById("currentdate").innerHTML = currentDate + "" + currentMonth "" + date.getFullYear();