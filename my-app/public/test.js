const fetch = require("node-fetch");
console.log("Yes");

function FetchData() {
  fetch
    .fetch(url)
    .then((res) => {
      if (res.ok) {
        console.log("Success");
        res.json();
      } else {
        console.log("Not Succesful");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("ERROR"));
}

FetchData();
