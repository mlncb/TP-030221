window.onload = function(){
    
    var mysteryCard = [];
    for(var i=0; i<52; i++){

    var li = document.createElement('a');
    li.href = "https://via.placeholder.com";
    
    var card = document.createElement('img');
    card.src = "https://via.placeholder.com/150.png?Text=Mistery+Card";
    li.appendChild(card)
    card.setAttribute('class','style');

    var containerCard = document.getElementById('container')
    mysteryCard.push(i);
    console.log(mysteryCard);
    alert
    }
}

    /*var idCardQuerySelector = document.querySelector("#card");
    var classCardQuerySelector = document.querySelector(".card");
    var divTagNameQuerySelector = document.querySelector("div");
    
    console.log('idCardQuerySelector: ', idCardQuerySelector);
    console.log('classCardQuerySelector: ', classCardQuerySelector);
    console.log('divTagNameQuerySelector: ', divTagNameQuerySelector);
    */



/*var img = document.createElement("img");
    img.src = "https://via.placeholder.com/150x150/0000FF/808080.png?Text=Mistery+Card";

    var  = document.getElementById("x")
    block.appendChild(img);*/ 
