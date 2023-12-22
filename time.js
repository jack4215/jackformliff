// function startTime()   
// {   
//   var today = new Date();
//   var yyyy = today.getUTCFullYear();
//   var MM = today.getUTCMonth() + 1;
//   var dd = today.getUTCDate();
//   var hh = today.getUTCHours();
//   var mm = today.getUTCMinutes();
//   var ss = today.getUTCSeconds();
//   MM = checkTime(MM);
//   dd = checkTime(dd);
//   hh = checkTime(hh);
//   mm = checkTime(mm);
//   ss = checkTime(ss);    

//   document.getElementById('nowDateTimeSpan').innerHTML=yyyy+"-"+MM +"-"+ dd +" " + hh+":"+mm+":"+ss;   
//     setTimeout('startTime()',1000);
// }   

// function checkTime(i)   
// {   
//     if (i<10){
//         i="0" + i;
//     }   
//       return i;
// }  
function startTime() {
  var today = new Date();
  var offset = -8; // UTC+8 時區偏移量
  var utc = today.getTime() + (today.getTimezoneOffset() * 60000);
  var localTime = new Date(utc + (3600000 * offset));

  var yyyy = localTime.getFullYear();
  var MM = checkTime(localTime.getMonth() + 1);
  var dd = checkTime(localTime.getDate());
  var hh = checkTime(localTime.getHours());
  var mm = checkTime(localTime.getMinutes());
  var ss = checkTime(localTime.getSeconds());

  document.getElementById('nowDateTimeSpan').innerHTML = yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  return (i < 10) ? "0" + i : i;
}

startTime();