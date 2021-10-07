const fetch = require("node-fetch");
const headers = {
  'Access-Control-Allow-Origin': process.env.VUE_APP_HOST,
};

exports.handler = async function (event) {
  console.log(JSON.parse(event.body))
  let body = JSON.parse(event.body)
  let placeId = body.placeId
  let key = process.env.VUE_APP_GMAP_KEY

  var myHeaders = new fetch.Headers();
  myHeaders.append("key", key);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const res = await fetch("https://maps.googleapis.com/maps/api/place/details/json?place_id=" + placeId + "&key=" + key +"&fields=adr_address,geometry,rating,opening_hours,name,user_ratings_total,url", requestOptions)
  .then(response => response.text())
  .catch(error => console.log('error', error));

  return {
    statusCode: 200,
    headers,
    body: res
  }
}