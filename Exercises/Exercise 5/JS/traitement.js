function btnCalculer_onclick()
{ 
     var Revenu,Loyer,Nourriture,Deplacemment,Reste;

     Revenu=parseInt(document.getElementById("txtReve").value);
     Loyer= parseInt(document.getElementById("txtLoyer").value);
     Nourriture=parseInt(document.getElementById("txtNour").value);
     Deplacemment=parseInt(document.getElementById("txtDep").value);

     Reste=parseFloat((Revenu-(Loyer+Nourriture+Deplacemment))/4);

     console.log("Vos reste par semaine est de "+Reste+"$");
}