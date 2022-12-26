window.onload = (function() {
  setTimeout(function() {
    $('#modal').modal('show');
  }, 200);

  const infoSubmit = document.getElementById("submit-button");
  const apiSend = function() {
      const visitorName = document.getElementsByTagName("input")[0].value;
      const visitorEmail = document.getElementsByTagName("input")[1].value;
      const myHeaders = new Headers();
      const dateTime = new Date();
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
          name:visitorName,
          email:visitorEmail,
          time:dateTime,
        }),
        redirect: 'follow',
      };
      
      const request = new Request("https://7i3xd8khgh.execute-api.us-east-1.amazonaws.com/default/fayzerVisitorInfo", requestOptions);

      fetch(request)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      
    };

  infoSubmit.addEventListener('click', apiSend);
  
});