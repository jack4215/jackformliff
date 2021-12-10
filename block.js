   liff.init({liffId: "1656185375-gBk83qL0" }).then(function (e) {
      var isLoggedIn = liff.isLoggedIn();
      if (isLoggedIn) {     
        liff.getProfile().then(function(data) {
          if (data.userId == Ud8d9cd2290d100db0ba3eb79a6c22dbf) {     
            liff.logout(); 
            alert('發生錯誤，網頁將重新轉導');
            window.location.reload();
          } 
        })
      }
   })
      
