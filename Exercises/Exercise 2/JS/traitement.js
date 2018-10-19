function btnCalculer_onclick()
{ 
     var KmMois,TotKm;

     KmMois=parseInt(document.getElementById("txtMois").value);
     TotKm = KmMois*60;
     console.log("Votre distance pour les 5 prochaines années est "+TotKm);

}