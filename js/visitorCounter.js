var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      var visitors = `Site visitors: ${JSON.stringify(this.responseText)}`;
        document.getElementById('viewCount').innerHTML = visitors;
      var output = document.getElementById('viewCount').innerHTML;
      var result = output.replace(/"/g, '');
        document.getElementById('viewCount').innerHTML = result;
        console.log(result);
    }
  });
xhr.open("POST", "https://293gl3o0bk.execute-api.us-east-1.amazonaws.com/default/fayzerVisitorCounter");
xhr.send();