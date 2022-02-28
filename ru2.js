
var month_names = new Array("January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December");
var d = new Date();
var current_date = d.getDate();

var current_month = d.getMonth();

var current_year = d.getFullYear();
alert("day - "+current_date+" ; month - " +current_month + " ; year - "+current_year);
if (current_month ==0) {
alert('На дворе январь'+ " ; "+ month_names[current_month]);
}
else if (current_month == 1) {
alert(' На дворе февраль'+ " ; "+ month_names[current_month]);
}
else {
alert('Месяц науке не известен!');
}
