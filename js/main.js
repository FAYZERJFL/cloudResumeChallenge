var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      document.getElementById('viewCount').innerHTML = (this.responseText);
      console.log(this.responseText);
    }
  });
xhr.open("POST", "https://usigzt2y68.execute-api.us-east-1.amazonaws.com/default/fayzerVisitorCounter");
xhr.send();
