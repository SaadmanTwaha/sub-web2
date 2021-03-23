var form = document.getElementById('formOne');
var div = document.getElementById('dev');

form.addEventListener('submit', newEvent);



function newEvent(e) {
    e.preventDefault();
   
    newItem = document.getElementById('textInput').value;
    newItem2 = document.getElementById('textInput2').value;
    //var h1 = document.createElement('h1');
    //h1.appendChild(document.createTextNode(newItem));
    //div.appendChild(h1);
    document.getElementById('dev').innerHTML = '<h1>' +newItem+ '</h1><p>' +newItem2+ '</p>';

    sub = document.getElementById('sub');
    //if(sub.style.display == 'none'){
      //  sub.style.display = 'block';
    sub.style.display = 'none';  
    //}


}


