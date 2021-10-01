const input =document.getElementById('input');
const button =document.getElementById('button');
const result =document.getElementById('result');
const body =document.getElementById('body');
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const sushil = ()=> {
    let word=input.value;
    fetch(url+word)
     .then (data=>data.json())
     .then(e=>
     {
        // console.log(e);
         result.innerHTML="<b>"+e[0].meanings[0].definitions[0].definition+"</b>";
         
       
     })
}


button.addEventListener("click",sushil);

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    // Alert the key name and key code on keydown
    if(name=="s"){
        sushil();
    }
  }, false);



