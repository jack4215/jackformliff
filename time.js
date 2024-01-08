function startTime(){   
  var today = new Date();
  var yyyy = today.getUTCFullYear();
  var MM = today.getUTCMonth() + 1;
  var dd = today.getUTCDate();
  var hh = today.getUTCHours();
  var mm = today.getUTCMinutes();
  var ss = today.getUTCSeconds();
  MM = checkTime(MM);
  dd = checkTime(dd);
  hh = checkTime(hh);
  mm = checkTime(mm);
  ss = checkTime(ss);    

  document.getElementById('nowDateTimeSpan').innerHTML=yyyy+"-"+MM +"-"+ dd +" " + hh+":"+mm+":"+ss;   
  setTimeout('startTime()',1000);
}   

function checkTime(i){   
    if (i < 10){
        i = "0" + i;
    }   
      return i;
}  
