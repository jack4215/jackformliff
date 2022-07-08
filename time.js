            function startTime()   
            {   
                var today=new Date();
                var yyyy = today.getFullYear();
                var MM = today.getMonth()+1;   
                var dd = today.getDate();
                var hh=today.getHours();
                var mm=today.getMinutes();
                var ss=today.getSeconds(); 
                MM=checkTime(MM);
                dd=checkTime(dd);
                hh=checkTime(hh);          
                mm=checkTime(mm);   
                ss=checkTime(ss);    

              document.getElementById('nowDateTimeSpan').innerHTML=yyyy+"-"+MM +"-"+ dd +" " + hh+":"+mm+":"+ss;   
                setTimeout('startTime()',500);
            }   

            function checkTime(i)   
            {   
                if (i<10){
                    i="0" + i;
                }   
                  return i;
            }  
