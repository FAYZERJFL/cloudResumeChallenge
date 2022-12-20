
const infoSubmit = document.getElementById("submit-button");

infoSubmit.addEventListener('click', function(e) 
  { 

    e.preventDefault();

    /*const visitorName = document.getElementById("name-entry"); 
    const visitorEmail = document.getElementById("email-entry"); */
    const visitorName = document.getElementsByTagName("input")[0].value;
    const visitorEmail = document.getElementsByTagName("input")[1].value;

    var myHeaders = new Headers();
    
    const formdata = {'name':visitorName, 'email':visitorEmail};

    console.log(formdata);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(formdata),
      redirect: 'follow',
    }

    console.log(requestOptions.body);

    var request = new Request("https://7i3xd8khgh.execute-api.us-east-1.amazonaws.com/default/fayzerVisitorInfo", requestOptions);

    fetch(request)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  
  });


  


