import React, {useState} from "react"
import {countries} from 'country-flag-icons'
import Flags from 'country-flag-icons/react/3x2'
import US from 'country-flag-icons/string/3x2/US'
import ReactCountryFlag from "react-country-flag"
import Table from "../Components/table"


var ArrayValues = [];
var ArrayFinalValues = [];
var country_list =["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia-Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Congo, Democratic Republic","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea North","Korea South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia (Former Yug. Rep.)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Romania","Russia","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa (Western)","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Wallis and Futuna Islands","Yemen","Zambia"];

 
var list = document.getElementById('Currency1');



var Kount = 1

var CurrencyNames1 ="This";
var CurrencyNames2 ="This";

const SCONDkey ="917474fcdede6bbb454b"
const key ="38401c3b1321005acab9"
const prefix = "https://whispering-inlet-92565.herokuapp.com/"
const url =  prefix+"https://free.currconv.com/api/v7/countries?apiKey="+SCONDkey;

//https://free.currconv.com/api/v7/countries?apiKey=917474fcdede6bbb454b
  async function FetchData() {
  //https://cors-anywhere.herokuapp.com/

 // const url =  "https://free.currconv.com/api/v7/countries?apiKey=917474fcdede6bbb454b";
 await fetch(prefix+url,{
method :"GET"
 })
  .then((res) => {
   let resp=  res.json()

    //console.log(resp)

    return resp
  }).then((data) => (ArrayValues = Object.values(data.results))).then((ArrayValues) => {

   // alert(Kount)

    Kount++
    console.log(ArrayValues)
    console.log("Here is the list of countries")
    console.log(countries[0])

    var list = document.getElementById('Currency1');

    let ArrayValues2 = []
       var BigString = ""
    for (var z = 0; z < ArrayValues.length; z++) {

      ArrayValues2[z] = ArrayValues[z].name

    }
  


    ArrayValues2 = ArrayValues2.sort();
    for (var z = 0; z < ArrayValues2.length; z++) {

      BigString += JSON.stringify(ArrayValues2[z])+",";

    }
    console.log("--------------------------------------------------------------------");
    console.log("IST OF COUNTRIES OFFICIAL");
    console.log(BigString);
    console.log("--------------------------------------------------------------------");
    /*
    ArrayValues2.forEach(function (item) {
      var option = document.createElement('option');
      option.textContent = item;
      option.value = item;

      if(Kount ===2)
      list.appendChild(option);
    });

    var list2 = document.getElementById('Currency2');

    ArrayValues2.forEach(function (item) {
      var option = document.createElement('option');
      option.textContent = item;
      option.value = item;
      if(Kount ===2)
      list2.appendChild(option);
    });
*/
  }).catch((error) => {
    console.log(error + "\n")
  })
}

async function RenderData(object1, object2, ArrayFinalValues) {


  var CurrencyName1 = document.getElementById("CurrencyName1")
  var CurrencyName2 = document.getElementById("CurrencyName2")

  CurrencyName1.innerHTML = object1[1]
  CurrencyName2.innerHTML = object2[1]

  CurrencyNames1 =object1[1]
  CurrencyNames2 =object2[1]


  var CurrencyCC1 = document.getElementById("CurrencyCC1")
  var CurrencyCC2 = document.getElementById("CurrencyCC2")


  CurrencyCC1.innerHTML = object1[1]
  CurrencyCC2.innerHTML = object2[1]

  

  console.log("lllllllllllllllll")
  console.log(CurrencyCC1)
  console.log(";lllllllllllllllll")
  console.log( CurrencyCC1)
  console.log("lllllllllllllllllll")

  /*
  CurrencyC1.value = object1[1]
  CurrencyC2.value = object2[1]
*/
  console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
  console.log(CurrencyCC1.value)
  console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
  console.log( CurrencyCC1.value)
  console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")

  var CurrencySymbol1 = document.getElementById("CurrencySymbol1")
  var CurrencySymbol2 = document.getElementById("CurrencySymbol2")

  CurrencySymbol1.innerHTML = object1[2]
  CurrencySymbol2.innerHTML = object2[2]

  var ID1 = document.getElementById("ID1")
  var ID2 = document.getElementById("ID2")

  ID1.innerHTML = object1[0]
  ID2.innerHTML = object2[0]

  var name1 = document.getElementById("Country1")
  var name2 = document.getElementById("Country2")

  name1.innerHTML = object1[4]
  name2.innerHTML = object2[4]

  var CurrencyComparaison1 = document.getElementById("CurrencyComparaison1")
  var CurrencyComparaison2 = document.getElementById("CurrencyComparaison2")

  var Line1 = ID1.innerHTML + " to " + ID2.innerHTML + " :" + ArrayFinalValues[0][1]

  var Line2 = ID2.innerHTML + " to " + ID1.innerHTML + " :" + ArrayFinalValues[1][1]
  CurrencyComparaison1.innerHTML = Line1
  CurrencyComparaison2.innerHTML = Line2

}

  function Form() {
   FetchData()
  const [Currency1,
    setCurrency1] = useState("Afghanistan")
  const [Currency2,
    setCurrency2] = useState("Afghanistan")

  const [value1,
    setvalue1] = useState("AF")

  const [value2,
    setvalue2] = useState("AF")
  function handleChange(event) {
    setCurrency1(event.target.value)
  }

  function handleChange2(event) {
    setCurrency2(event.target.value)
  }

   async function handleClick(event) {
    event.preventDefault()
    console.log("Currency 1 is " + Currency1)
    console.log("Currency 2 is " + Currency2)
    console.log(ArrayValues[0])
    let ApprovedCurrency1 = ""
    let ApprovedCurrency2 = ""

    const ArrayOfCountry1 = ReturnValues(Currency1, ArrayValues);
    const ArrayOfCountry2 = ReturnValues(Currency2, ArrayValues);

    ApprovedCurrency1 = ArrayOfCountry1[0];
    ApprovedCurrency2 = ArrayOfCountry2[0];

    /*
    elements[0] = entry.currencyId;
    elements[1] = entry.currencyName;
    elements[2] = entry.currencySymbol;
    elements[3] = entry.id;
    elements[4] = entry.name;

    */
    var index = 0;
    var Information = ""

    console.log("+++++++++++++++++++++++")
    console.log(ArrayOfCountry1)
    console.log("+++++++++++++++++++++++")

    try {
    ArrayOfCountry1.forEach(function (item) {

      if (index === 0) {
        Information = "currencyId"
      } else if (index === 1) {
        Information = "currencyName"
      } else if (index === 2) {
        Information = "currencySymbol"
      } else if (index === 3) {
        Information = "id"
      } else if (index === 4) {
        Information = "name"
      }

      if (index === 3) {

        setvalue1(item)

      }
      console.log("Info for Currency1 " + Currency1 + " " + Information + ": " + item + "\n")
      index++
    })
  }

  catch(error){
    console.log(error)
    console.log(ArrayOfCountry1)
    console.log(ArrayOfCountry1.length)
    
  }

    console.log("--------------------------------------------------------------------------")
    console.log("--------------------------------------------------------------------------")

    console.log("/n /n")

    index = 0

    
    console.log("+++++++++++++++++++++++")
    console.log(ArrayOfCountry2)
    console.log("+++++++++++++++++++++++")

    try{
      ArrayOfCountry2.forEach(function (item) {
        if (index === 0) {
          Information = "currencyId"
        } else if (index === 1) {
          Information = "currencyName"
        } else if (index === 2) {
          Information = "currencySymbol"
        } else if (index === 3) {
          Information = "id"
        } else if (index === 4) {
          Information = "name"
        }
  
        if (index === 3) {
  
          setvalue2(item)
  
        }
  
        console.log("Info for Currency2 " + Currency2 + " " + Information + ": " + item + "\n")
        index++
      })
  
    }

    catch(err){
      console.log(err)
      console.log(ArrayOfCountry2)
      console.log(ArrayOfCountry2.length)
    }
  
    console.log("Approved Currency 1 is " + ApprovedCurrency1)

    console.log("Approved Currency 2 is " + ApprovedCurrency2)
   // 917474fcdede6bbb454b
    const DummyURL = prefix+"https://free.currconv.com/api/v7/convert?q=" + ApprovedCurrency1 + "_" + ApprovedCurrency2 + "," + ApprovedCurrency2 + "_" + ApprovedCurrency1 + "&compact=ultra&apiKey="+SCONDkey;
    //const DummyURL = "https://free.currconv.com/api/v7/convert?q=" + ApprovedCurrency1 + "_" + ApprovedCurrency2 + "," + ApprovedCurrency2 + "_" + ApprovedCurrency1 + "&compact=ultra&apiKey=917474fcdede6bbb454b";

      await fetch(DummyURL,{
        method :"GET"
         }).then((res) => {
          let resp=  res.json()
          //console.log(resp)
          return resp
    }).then((data) => {
      (ArrayFinalValues = Object.entries(data))
      console.log("------Comparaing currencies")

      console.log(ArrayFinalValues[0])
      console.log(ArrayFinalValues[0][0])

      console.log(ArrayFinalValues[0][1])

      console.log(ArrayFinalValues[1])
      console.log(ArrayFinalValues[1][0])

      console.log(ArrayFinalValues[1][1])
      const LoadData = async () => {
        try {
          await RenderData(ArrayOfCountry1, ArrayOfCountry2, ArrayFinalValues)
          console.log("------Comparaing currencies")
        } catch(err) {
        console.error(err)
        }
        };
         LoadData()
    /**
       *
       * ArrayFinalValues[0][1] use this to acced the values as you wish
       *
       */

    }).catch((e) => console.log(e))
    console.log("Changing the flag")
    const flag = document.getElementById("Flag1")
    console.log(flag.countryCode)
    flag.countryCode = "FR"

  }

  function ReturnValues(Name, array) {
    let elements = "empty";
    array.forEach((entry) => {
      if (entry.name === Name) {
        elements = [];
        elements[0] = entry.currencyId;
        elements[1] = entry.currencyName;
        elements[2] = entry.currencySymbol;
        elements[3] = entry.id;
        elements[4] = entry.name;
      }
    });

    return elements;
  }
  return (
    <div className="BigDiv">

      <table className="ZeTable">
        <tr >
          <td>
              <ReactCountryFlag
                countryCode={value1}
                id="Flag1"
                style={{
                width: '15em',
                height: '15em'
              }}
                svg/>
          </td>

          <td>
            <form className="MyForm">
              <h1>Choose two countries to compare
              </h1>
              <br/>
              <input list="Currency1" name="Currency11" id="SpecialInput"  onChange={handleChange}  value={Currency1}/>
              <datalist
                onChange={handleChange}
                value={Currency1}
                
                name="Currency1"
                id="Currency1"
                className="MyInput">
                </datalist>
<br/>
<br/>

                <input list="Currency2" name="Currency22" id="SpecialInput2"  onChange={handleChange2}  value={Currency2}/>
              <datalist
                onChange={handleChange2}
                value={Currency2}
                name="Currency2"
                id="Currency2"
                className="MyInput">
                </datalist>
                 <br/>
                 <br/>
              <button type="submit" onClick={handleClick} className="MyButton">Submit</button>

            </form>
          </td>
          <td >
              <ReactCountryFlag
                countryCode={value2}
                
                style={{
                width: '15em',
                height: '15em'
              }}
                svg/>    
          </td>
        </tr>
      </table>
        <Table/>
    </div>
  )
}

window.onload = () => {
  //write your code here
  var list = document.getElementById('Currency1');
for(var item = 0 ; item <  country_list.length ; item++){
  var option = document.createElement('option');
  option.textContent = country_list[item];
  option.value = country_list[item];

  list.appendChild(option);
}

var list2 = document.getElementById('Currency2');

for(var item = 0 ; item <  country_list.length ; item++){
  var option = document.createElement('option');
  option.textContent = country_list[item];
  option.value = country_list[item];

  list2.appendChild(option);
}


}

export default Form

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
console.log(CurrencyNames1)
console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
console.log(CurrencyNames2)
console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
