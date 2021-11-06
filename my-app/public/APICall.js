const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const https = require("https");
let data = "";
let AllCountries = [];

const currency = "";

// This is the list of currencies
const url2 =
  "https://free.currconv.com/api/v7/currencies?apiKey=38401c3b1321005acab9";

// This is the list of the countries with currencies
const url =
  "https://free.currconv.com/api/v7/countries?apiKey=38401c3b1321005acab9";

function FetchData() {
  fetch(url)
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

// This function is being used to verify if the country is in the database
function ReturnValues(Name, array) {
  let elements = "empty";
  array.forEach((entry) => {
    if (entry.name === Name) {
      elements = [];
      elements[0] = entry.currencyId;
      elements[1] = entry.currencyName;
      elements[2] = entry.currencySymbol;
      elements[3] = entry.name;
    }
  });

  return elements;
}

// This is done to bring info from html forms
// This is the home root

//documentation
// https://www.currencyconverterapi.com/docs

//Comparing two values
//"https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=38401c3b1321005acab9"

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.body.element1);
  console.log(req.body.element2);
  console.log("Post request received");
  console.log(res.statusCode);

  let Currency1 = req.body.element1;
  let Currency2 = req.body.element2;

  let ApprovedCurrency1 = "";
  let ApprovedCurrency2 = "";
  console.log("-----------------------------------");
  console.log(ReturnValues(Currency1, AllCountries));
  console.log(ReturnValues(Currency2, AllCountries));
  console.log("-----------------------------------");
  console.log("-----------------------------------");
  console.log(ReturnValues(Currency1, AllCountries) === "empty");
  console.log(ReturnValues(Currency2, AllCountries) === "empty");
  console.log("-----------------------------------");

  if (
    ReturnValues(Currency1, AllCountries) !== "empty" &&
    ReturnValues(Currency2, AllCountries) !== "empty"
  ) {
    const ArrayOfCountry1 = ReturnValues(Currency1, AllCountries);
    const ArrayOfCountry2 = ReturnValues(Currency2, AllCountries);

    ApprovedCurrency1 = ArrayOfCountry1[0];
    ApprovedCurrency2 = ArrayOfCountry2[0];

    console.log("Value 1 is : " + ApprovedCurrency1);
    console.log("Value 2 is : " + ApprovedCurrency2);

    //free.currconv.com/api/v7/convert?q=CAD_DZD,DZD_CAD&compact=ultra&apiKey=38401c3b1321005acab9
    https: ApprovedCurrency1 + "_" + ApprovedCurrency2;
    const DummyURL =
      "https://free.currconv.com/api/v7/convert?q=" +
      ApprovedCurrency1 +
      "_" +
      ApprovedCurrency2 +
      "," +
      ApprovedCurrency2 +
      "_" +
      ApprovedCurrency1 +
      "&compact=ultra&apiKey=38401c3b1321005acab9";
    let chunks = "";
    https.get(DummyURL, (response) => {
      response.on("data", (data) => {
        chunks += data;
      });

      console.log(DummyURL);
      response.on("end", function () {
        const DataRates = JSON.parse(chunks);
        //console.log(ObjectData);

        // Extracting all the countries from the fetch API into an array
        const Rates = Object.values(DataRates);

        console.log(Rates.length);
        console.log(DataRates);
        console.log(Rates);

        const rate1 = Rates[0];
        const rate2 = Rates[1];

        console.log(
          "The conversion rate between " +
            Currency1 +
            " and " +
            Currency2 +
            " is " +
            rate1 +
            " and between " +
            Currency2 +
            " and " +
            Currency1 +
            " is " +
            rate2
        );
        res.send(
          "The conversion rate between " +
            Currency1 +
            " and " +
            Currency2 +
            " is " +
            rate1 +
            " and between " +
            Currency2 +
            " and " +
            Currency1 +
            " is " +
            rate2
        );
      });
    });
  } else {
    res.write("You have entered the wrong countries ");
    console.log("You have entered the wrong countries");
  }
});

//documentation
// https://www.currencyconverterapi.com/docs

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
  //data events can be fired multiple times, so you have to collect all the data values and concatenate them together when the end event has fires:
  let chunks = "";
  https.get(url, (response) => {
    response.on("data", (data) => {
      chunks += data;
    });

    response.on("end", function () {
      const ObjectData = JSON.parse(chunks);

      // Extracting all the countries from the fetch API into an array
      AllCountries = Object.values(ObjectData.results);
    });
  });
});

exports.currency = currency;

module.exports.FetchData = FetchData;
