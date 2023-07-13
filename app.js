let displayTop = document.querySelector(".display-top");
let displayBottom = document.querySelector(".display-bottom");
const buttonsContainer=document.querySelector(".buttons-container")

let operator = "";
let firstNumber = "";
let isPreviousOperator = false;




  //! classList adından da anlaşılacağı üzerinde üzerine tıkladığımız elementin tüm class'larını bir array şeklinde saklar
  //! classList'i kontrol ederek yapılacak işleme/fonksiyona karar veriyoruz

buttonsContainer.addEventListener("click",(event)=>{

    /* -------------------------------------------------------------------------- */
// Containera addeventListener eklediğim için boş alanlarada tıklanabilir. Bunun etkilememesi için ;

if (!event.target.classList.contains("button")) return;
/* -------------------------------------------------------------------------- */
// bir butona basıldıysa basılan butonu ilk değer olarak atıyalım
let primaryValue=displayBottom.innerHTML
let buttonValue=event.target.innerHTML
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                         AC butonu ile Silme İşlemi                         */
/* -------------------------------------------------------------------------- */
if ( event.target.classList.contains("ac")){
    operator=""
    displayBottom.innerHTML="0"
    displayTop.innerHTML=""
    firstNumber=""
}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                              RAKAMA BASILDIYSA                             */
/* -------------------------------------------------------------------------- */
// Ssayıların ekrana yazırılması bölümü

if (event.target.classList.contains("number")){
    // eğer ekrana yazılan kararkter sayısı 11den büyükse artık ekrana yazmaya devam etmesin
    if (primaryValue.length<11){
      if (primaryValue !== "0"){
          displayBottom.innerHTML +=buttonValue
        }else if (buttonValue !== "0"){
            displayBottom.innerHTML=buttonValue
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                       PM  - EKLEME ÇIKARMA İŞLEMİ                          */
/* -------------------------------------------------------------------------- */

// ekrana gelen değerin önüne - işareti ekleme yada kaldırma
if ( event.target.classList.contains("pm")){
  if (primaryValue[0] == "-"){
   displayBottom.innerHTML=primaryValue.substring(1)
  }
  else if (primaryValue.length<11 && primaryValue !=="0" ){
    displayBottom.innerHTML = "-" + primaryValue
  }
}
 /* -------------------------------------------------------------------------- */
 /*                    . TUŞUNA BASILDIYSA DECIMALE ÇEVİRME                    */
 /* -------------------------------------------------------------------------- */

 if (event.target.classList.contains("decimal")){
  //  bir . işareti barındırıyorsa yeni bir tane eklemesin - yoksa eklesin
    if ( !primaryValue.includes(".") ){
      displayBottom.innerHTML +="."
    }
 }

/* -------------------------------------------------------------------------- */
/*                      HESAPLATMA İŞLEMLERİ - OPERATORS                      */
/* -------------------------------------------------------------------------- */
// Operator işlemleri - + - */
function calculate(operator) {
  switch (operator) {
    case "+":
      return Number(firstNumber) + Number(displayBottom.innerHTML);
    case "-":
      return Number(firstNumber) - Number(displayBottom.innerHTML);
    case "÷":
      return (Number(firstNumber) / Number(displayBottom.innerHTML)).toFixed(2);
    case "x":
      return Number(firstNumber) * Number(displayBottom.innerHTML);
  }
}

if (event.target.classList.contains("operator")){
  if (!isPreviousOperator){
  if ( displayTop.innerHTML && operator ){
    firstNumber=calculate()
  }
  else{
    firstNumber=primaryValue
  }
  displayBottom.innerHTML="0"
}
operator=buttonValue
displayTop.innerHTML=firstNumber+" "+operator
isPreviousOperator=true
}

else isPreviousOperator=false

/* -------------------------------------------------------------------------- */
/*                               EŞİTTİR İŞARETİ                              */
/* -------------------------------------------------------------------------- */
if ( event.target.classList.contains("equal")){
firstNumber=calculate(operator)

displayTop.innerHTML=firstNumber
displayTop.innerHTML=displayTop.innerHTML.slice(0,10)
operator=""
displayBottom.innerHTML="0"
isPreviousOperator=true
}

})


