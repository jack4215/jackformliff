  async function main() {
    await liff.init({ liffId: "1656185375-gBk83qL0" })
      if (liff.isLoggedIn()) {
        getUserProfile()     
      } 
  }
  
  async function getUserProfile() {
    const profile = await liff.getProfile()
    document.getElementById("displayName").append(profile.displayName)
    document.getElementById("userId").append(profile.userId)
    document.getElementById("decodedIDToken").append(liff.getDecodedIDToken().email)
  }
  main() 
