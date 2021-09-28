const fetch = require("node-fetch");
const headers = {
  'Access-Control-Allow-Origin': process.env.VUE_APP_FN_HOST,
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST'
};

exports.handler = async function (event) {
  console.log(JSON.parse(event.body))
  // let body = JSON.parse(event.body)
  // var key = process.env.VUE_APP_GMAP_KEY
  var placeId = JSON.parse(event.body).placeId
  let key = process.env.VUE_APP_GMAP_KEY

  var myHeaders = new fetch.Headers();
  myHeaders.append("key", key);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const res = await fetch("https://maps.googleapis.com/maps/api/place/details/json?place_id=" + placeId + "&key=" + key, requestOptions)
  .then(response => response.text())
  .catch(error => console.log('error', error));

  return {
    statusCode: 200,
    headers,
    body: res
  }
}