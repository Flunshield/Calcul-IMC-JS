function IMC() 
    {

        // Sélectionner l'élément input et récupérer sa valeur
        let size = document.getElementById("taille").value;
        let lenght = document.getElementById("poids").value;
        console.log('test');
        console.log(size);
        console.log('test2');
        console.log(lenght);
        console.log('test3');
        result = lenght/(size*size);
        console.log('test4');
        let res = result.toFixed(1);
        test = "Votre IMc est de : " + res;


        let k = document.getElementById("input1");

        k.innerHTML = "</br>" + test;
        
    };

    function changeColor() { 
        color = document.getElementById("couleur").value;
        document.body.style.background = color; 
    }