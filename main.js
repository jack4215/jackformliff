  window.onload =  function(){
    var path = new URL(window.location);
    var formUrl = path.searchParams.get('form');
    var redirect = function(name,uid) {
      var src = decodeURIComponent(formUrl.replaceAll('*%7CNAME%7C*', name).replaceAll('*%7CUID%7C*', uid));
      try {
        window.location.replace(src);
      } catch {
        window.location.href = src;
      }
    };
    
    liff.init({liffId: "1656185375-gBk83qL0" }).then(function (e) {
      var isLoggedIn = liff.isLoggedIn();
      if (isLoggedIn) {     
        liff.getProfile().then(function(data) {
          if (!liff.isInClient()){
          alert('請使用 LINE 應用程式開啟 (isInClient: false)');
          window.opener = null;
          window.close();
          return;
	  }
          redirect(data.displayName , data.userId);
        })
        .catch(function(err) {
        liff.logout(); 
        window.location.reload();
        })
      } else {
        liff.login({redirectUri: location.href})
      }
    })
   }
