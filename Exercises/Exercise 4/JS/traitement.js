function btnCalculer_onclick()
{ 
     var Destination,Distance,Consom,Prix_L,Cout;

    Destination=document.getElementById("lstDestination").value;
    Distance=parseFloat(document.getElementById("txtDistance").value);
    Consom=parseInt(document.getElementById("txtConsom").value);
    Prix_L=parseFloat(document.getElementById("txtEssence").value);

    Cout=parseFloat(Distance*Consom/100*Prix_L);

    console.log("Le coût de votre déplacement à "+Destination+" est de "+Cout+"$");


}