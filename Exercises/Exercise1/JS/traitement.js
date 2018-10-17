function btnCalculer_onclick()
{ 
     var PoidsLivres,kg;

     PoidsLivres=parseFloat(document.getElementById("txtPoids").value);
     kg=(PoidsLivres/2.2)
     console.log("Votre poids en kg est "+kg);

}