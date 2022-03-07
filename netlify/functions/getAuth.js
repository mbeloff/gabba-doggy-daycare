const fetch = require("node-fetch");


exports.handler = async function () {       
        let Base64 = 'Basic ' + process.env.VUE_APP_PE_BASE_BRIS
        let user = process.env.VUE_APP_PE_U_BRIS
        let pw = process.env.VUE_APP_PE_P_BRIS

        const urlencoded = new URLSearchParams();
                urlencoded.append("grant_type", "password");
                urlencoded.append("username", user);
                urlencoded.append("password", pw);
                urlencoded.append("scope", "owner_create company_read");

        var requestOptions = {
          method: 'POST',
          headers: {
            "Authorization":Base64,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: urlencoded,
          redirect: 'follow'
        };

        const response = await fetch("https://secure.petexec.net/api/token", requestOptions)
          .then(response => response.json())
          .catch(error => console.log('error', error))
        
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': process.env.VUE_APP_HOST
          },
          body: JSON.stringify(response)
        }
}