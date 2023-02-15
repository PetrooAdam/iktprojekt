var date = new Date();
var hours = date.getHours();
var day = date.getDay();

var title = "Szép napot!";
if(hours<= 9)
{
title = "Jó reggelt!";
}
else
if(hours>19)
{
title="Szép Estét!";
}
document.querySelector('body h1').innerHTML = title;