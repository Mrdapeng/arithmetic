function getUrl(URL) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        }
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = function() {
      reject(new Error(xhr.statusText));
    };
    xhr.send();
  });
}

var URL = "http://httpbin.org/get";
getUrl(URL)
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  });
