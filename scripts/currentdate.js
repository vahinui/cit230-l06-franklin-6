var d = new Date();

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var numberdate = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "Spetember", "October", "November", "December"];

var x1 = day[date.getDay()];
var x2 = numberdate[date.getDate()];
var x3 = month[date.getMonth]


document.getElementById("currentdate").innerHTML = x1 + "," + x2 " " + x3 + " " + date.getFullYear();