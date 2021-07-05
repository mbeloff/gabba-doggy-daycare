const fetch = require("node-fetch");


exports.handler = async function (event) {
        var Base64;
        var user;
        var pw;
        
        if(event.queryStringParameters.r == 'brisbane') {
          Base64 = 'Basic ' + process.env.VUE_APP_PE_BASE_BRIS
          user = process.env.VUE_APP_PE_U_BRIS
          pw = process.env.VUE_APP_PE_P_BRIS
        }

        if(event.queryStringParameters.r == 'adelaide') {
          Base64 = 'Basic ' + process.env.VUE_APP_PE_BASE_ADE
          user = process.env.VUE_APP_PE_U_ADE
          pw = process.env.VUE_APP_PE_P_ADE
        }

        const myHeaders = new fetch.Headers();
          myHeaders.append("Authorization", Base64);
          myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
                urlencoded.append("grant_type", "password");
                urlencoded.append("username", user);
                urlencoded.append("password", pw);
                urlencoded.append("scope", "owner_create company_read");
                // console.log(urlencoded)

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
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(response)
        }
}