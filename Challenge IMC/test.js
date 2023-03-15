function IMC() 
    {
        // Sélectionner l'élément input et récupérer sa valeur
        let size = document.getElementById("taille").value;
        let lenght = document.getElementById("poids").value;
        res = lenght/(size*size);
        res = res.toFixed(1);
        result = "Votre IMc est de : " + res;
        let k = document.getElementById("input1");
        k.innerHTML = "</br>" + result; 
    }

    function changeColor() { 
        color = document.getElementById("couleur").value;
        document.body.style.background = color; 
    }