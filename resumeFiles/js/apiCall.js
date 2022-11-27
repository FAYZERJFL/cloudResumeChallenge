var requestOptions = {
  method: 'POST',
  redirect: 'follow'
};

fetch("https://usigzt2y68.execute-api.us-east-1.amazonaws.com/default/fayzerVisitorCounter", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));