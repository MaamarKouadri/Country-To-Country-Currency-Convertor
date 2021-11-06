import React, {useState} from "react"

function Table() {

var Check1 = false
var Check2 = false


  function ConvertValue (event)  {
    event.preventDefault()


    var permission =true
  var CurrencyComparaison1 = document.getElementById("CurrencyComparaison1")
  var CurrencyComparaison2 = document.getElementById("CurrencyComparaison2")


  var CurrencyName1 = document.getElementById("CurrencyName1")
  var CurrencyName2 = document.getElementById("CurrencyName2")
 

  var Checked1 = document.getElementById("CurrencyC1")
  var Checked2 = document.getElementById("CurrencyC2")
   
  var Checkeds1 = document.getElementById("CurrencyCC1")
  var Checkeds2 = document.getElementById("CurrencyCC2")

  
  
  var StringA = CurrencyComparaison1.innerHTML
  var StringB = CurrencyComparaison2.innerHTML


  const myArr = StringA.split("to");

  console.log(myArr[0])
  console.log(myArr[1])

  

  if(Checked1.checked ){
    if(Checkeds1.innerHTML === "Currency1"  ||   Checkeds2.innerHTML === "Currency2") {


      alert("Please select two countries to compare before trying to convert values")
     
      window.location.reload(true);
    }
 
    
        
    var AlertMessage = document.getElementById("AlertMessage")
    AlertMessage.innerHTML = ("")
    
    console.log(Checked1.checked)
    console.log(Checked2.checked)


    console.log("The chosen currency is " + CurrencyName1.innerHTML)
    console.log("The rate of conversion is " + CurrencyComparaison1.innerHTML)

    const myArr = StringA.split("to");
    const myArr2 = myArr[1].split(":");
  
  console.log(myArr[0])
  console.log(myArr[1])
  console.log(myArr2[1])

    var Number1 = myArr2[1]

    var valueEntered = document.getElementById("NumberEntered")


  var AlertMessage = document.getElementById("AlertMessage")
  if(valueEntered.value === "" || isNaN(valueEntered.value)){


  valueEntered.style.border= "2px solid red"

 
  AlertMessage.style.color = "red"
  AlertMessage.innerHTML = ("Please enter a number so we could perform a conversion")

  }
  else  {
    AlertMessage.style.property="initial"
    valueEntered.style.property="initial"
    valueEntered.style.border= "3px solid blue"
var TheValue = valueEntered.value
  console.log("Value entered is " + TheValue)
  var ConvertedValue = Number1 *TheValue

  ConvertedValue = parseFloat(ConvertedValue).toFixed(2);
  console.log("ConvertedValue " + TheValue)

  console.log("For " + TheValue + " " +  CurrencyName1.innerHTML+"s" + " you will get " + ConvertedValue + " " + CurrencyName2.innerHTML+"s")
  
  var Message = "For " + TheValue + " " +  CurrencyName1.innerHTML +"s" + " you will get " + ConvertedValue + " " + CurrencyName2.innerHTML +"s"

  var Output = document.getElementById("Output")

  Output.innerHTML = Message

  Output.style.border= "3px solid blue"

  Output.style.background="white";
  }


}

  else if(Checked2.checked){

    
    if(Checkeds1.innerHTML === "Currency1" || Checkeds2.innerHTML === "Currency2") {

      alert("Please select two countries to compare before trying to convert values")
     
      window.location.reload(true);
    
    }


     
    var AlertMessage = document.getElementById("AlertMessage")
    AlertMessage.innerHTML = ("")
    console.log(Checked1.checked)
    console.log(Checked2.checked)


    Check2 = true
    Check1 = false

    Checked1.checked = false
    console.log("The chosen currency is " + CurrencyName2.innerHTML)
    console.log("The rate of conversion is " + CurrencyComparaison2.innerHTML)

    const myArr = StringB.split("to");
    const myArr2 = myArr[1].split(":");
  
  console.log(myArr[0])
  console.log(myArr[1])
  console.log(myArr2[1])

  var Number1 = myArr2[1]

  var valueEntered = document.getElementById("NumberEntered")
  var TheValue = valueEntered.value
  console.log("Value entered is " + TheValue)
  var ConvertedValue = Number1 *TheValue
  var AlertMessage = document.getElementById("AlertMessage")

  if(valueEntered.value === "" || isNaN(valueEntered.value)  ){
  //alert(valueEntered.value)

  valueEntered.style.border= "2px solid red"

  AlertMessage.style.color = "red"

  
  AlertMessage.innerHTML  = ("Please enter a number so we could perform a conversion")

  }

  else{

    AlertMessage.style.property="initial"
    valueEntered.style.property="initial"
    valueEntered.style.border= "3px solid blue"

  ConvertedValue = parseFloat(ConvertedValue).toFixed(2); 

  console.log("ConvertedValue " + TheValue)

  console.log("For " + TheValue + " " +  CurrencyName2.innerHTML+"s" + " you will get " + ConvertedValue + " " + CurrencyName1.innerHTML+"s")
  
  var Message = "For " + TheValue + " " +  CurrencyName2.innerHTML+"s" + " you will get " + ConvertedValue + " " + CurrencyName1.innerHTML+"s"

  var Output = document.getElementById("Output")

  Output.innerHTML = Message

  Output.style.border= "3px solid black"

  }
  
}

  else{

    var AlertMessage = document.getElementById("AlertMessage")
  AlertMessage.style.color = "red"
  AlertMessage.innerHTML = ("Please select a currency to compare with")

  }

  }
  return (

    <table className="Outer">
      <tr>
        <table id="Table">
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Currency Id</th>
              <th>Currency Name</th>
              <th>Currency Symbol</th>
              <th>Currency comparaisons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="Country1"></td>
              <td id="ID1"></td>
              <td id="CurrencyName1"></td>
              <td id="CurrencySymbol1"></td>
              <td id="CurrencyComparaison1"></td>
            </tr>
            <tr>
              <td id="Country2"></td>
              <td id="ID2"></td>
              <td id="CurrencyName2"></td>
              <td id="CurrencySymbol2"></td>
              <td id="CurrencyComparaison2"></td>
            </tr>
          </tbody>
        </table>
      </tr>
      <tr>
        <td className="FormDiv">
          <div >
            <form>
              <h2>Convertor
              </h2>
              <label/>
              <input type="radio" id="CurrencyC1" name="Currencys" value="Currency1"/>
              <label for="CurrencyC1" id="CurrencyCC1" name="Currency">
                Currency1
              </label>
              <input type="radio" id="CurrencyC2" name="Currencys" value="Currency2"/>
              <label for="CurrencyC2" id="CurrencyCC2" name="Currency"  >
                Currency2
              </label>
              <br/>
              <br/>
              <input
                placeholder="Enter a number to get the desired value ..."
                type="text"
                id="NumberEntered"/>
                <p id = "AlertMessage"/>
              <br/>
              <br/>
              <button type="submit"  onClick={ConvertValue} className="ConvertButton">
                Convert
              </button>
              <br/>
              <br/>  
              <br/>
              
              <output name="output" for="Currency1 Currency2" id="Output"></output>
              <br/>
              <br/>
            </form>
          </div>
        </td>
      </tr>
    </table>
  )

}

export default Table