window.onload = (function() {
  setTimeout(function() {
    $('#modal').modal('show');
  }, 7000);
});


const infoSubmit = document.getElementById("submit-button");

const apiSend = function(){

  const visitorName = document.getElementsByTagName("input")[0].value;
  const visitorEmail = document.getElementsByTagName("input")[1].value;
    console.log(visitorName);
    console.log(visitorEmail);
    
  var formdata = new FormData();
    formdata.append("name: ", visitorName);
    formdata.append("email: ", visitorEmail);

  console.log([...formdata]);

  


  var myHeaders = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Methods", "POST, OPTIONS");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  }

  fetch("https://iot46sut9k.execute-api.us-east-1.amazonaws.com/default/fayzerVisitorInfo", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}; 

infoSubmit.addEventListener('click', apiSend);