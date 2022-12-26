let xhr = new XMLHttpRequest();
xhr.withCredentials = false;
xhr.addEventListener("readystatechange", function(){
  if(this.readyState === 4){
    let visitors = (`~Site visitors: ${JSON.stringify(this.responseText)}~`).replace(/"/g, '');
    document.getElementById('viewCount').innerHTML = visitors;
    console.log(visitors);
  }
});
xhr.open("POST", "https://293gl3o0bk.execute-api.us-east-1.amazonaws.com/default/fayzerVisitorCounter");
xhr.send();