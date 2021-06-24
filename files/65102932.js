router.get("/youtube/callback", function(req, res) {
    // Create an OAuth2 client object from the credentials in our config file
    const oauth2Client = new OAuth2(
      CONFIG.oauth2Credentials.client_id,
      CONFIG.oauth2Credentials.client_secret,
      CONFIG.oauth2Credentials.redirect_uris[0]
    );
  
    if (req.query.error) {
      // The user did not give us permission.
      return res.redirect("/");
    } else {
      oauth2Client.getToken(req.query.code, function(err, token) {
        if (err) return res.redirect("/");
  
        // Store the credentials given by google into a jsonwebtoken in a cookie called 'jwt'
        res.cookie("jwt", jwt.sign(token, CONFIG.JWTsecret));
        
        // return res.redirect("/get_some_data");
  
        if (!req.cookies.jwt) {
          // We haven't logged in
          return res.redirect("/");
        }
      
        // Add this specific user's credentials to our OAuth2 client
        oauth2Client.credentials = jwt.verify(req.cookies.jwt, CONFIG.JWTsecret);
      
        // Get the youtube service
        const service = google.youtube("v3");
  
        const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token[Object.keys(token)[0]]}`;
  
        // ================ mark 1 ====================
        const get_data = async () => {
          try {
            const response = await nf(url);
            const json = await response.json();
            return json;
          } catch (error) {
            console.log(error);
          }
        };
  
        // Get 50 of the user's subscriptions (the channels they're subscribed to)
        service.subscriptions
          .list({
            auth: oauth2Client,
            mine: true,
            part: "snippet,contentDetails",
            maxResults: 50
          })
          // ================ mark 2 ====================
          // remember to add async here
          .then(async (response) => { 
             // ================ mark 2 ====================
             const diomerda = await get_data()
  
            // Render the profile view, passing the subscriptions to it
            return res.render("./user/dashboard", { subscriptions: response.data.items, diomerda: diomerda });
          });
  
      });
    }
  });
