

window.onload = () => {
   
   var el = document.createElement('p');

    el.innerHTML = "Amazing new feature added!"  
    
    var body = document.getElementsByTagName('body')[0];

    body.appendChild(el);
}