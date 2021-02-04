window.onload = function(){
    
    
    var container = document.createElement('div');
    container.setAttribute('class', 'container');
    
    for(var i=0; i<52; i++){
    
        var card = document.createElement('img');

        /**
         * @ToDo
         * Générer la couleur aléatoirement 
         */
        card.src = "https://via.placeholder.com/150.png?Text=Mistery+Card";

        container.appendChild(card);

        card.addEventListener('click', function(e){
            console.log(e);
        }, false)
    }

    document.body.appendChild(container);
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
