liff.init({liffId: "1656185375-gBk83qL0" }).then(function (e) {
      var isLoggedIn = liff.isLoggedIn();
      if (isLoggedIn) {     
        liff.getProfile().then(function(data) {
          if (data.displayName == '%') {     
            liff.logout(); 
            alert('恭喜你找出答案！');
          } 
        })
      }
   })
      
