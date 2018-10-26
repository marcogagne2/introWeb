function btnCalculer_onclick()
{ 
    var Un,Cinq,Dix,Ving_Cinq,Total;

    Un=parseInt(document.getElementById("txtUn").value);
    Cinq= parseInt(document.getElementById("txtCinq").value);
    Dix=parseInt(document.getElementById("txtDix").value);
    Ving_Cinq=parseInt(document.getElementById("txtVing_Cinq").value);

    Total=parseFloat((Un*0.01)+(Cinq*0.05)+(Dix*.1)+(Ving_Cinq*.25));

     console.log("Votre argent en Canadien tire est de "+Total+"$");
}