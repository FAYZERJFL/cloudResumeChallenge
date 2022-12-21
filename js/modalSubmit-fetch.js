const infoSubmit = document.getElementById("submit-button");

infoSubmit.addEventListener('click', function() 
  { 
    const visitorName = document.getElementsByTagName("input")[0].value;
    const visitorEmail = document.getElementsByTagName("input")[1].value;
    var myHeaders = new Headers();
    const formdata = {'name':visitorName, 'email':visitorEmail};
    const dateTime = new Date();
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        name:visitorName,
        email:visitorEmail,
        time:dateTime,
      }),
      redirect: 'follow',
    };
    
    /*
    console.log(dateTime);
    console.log(formdata);
    console.log(requestOptions.body);
    */

    var request = new Request("https://7i3xd8khgh.execute-api.us-east-1.amazonaws.com/default/fayzerVisitorInfo", requestOptions);

    fetch(request)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  });


  


