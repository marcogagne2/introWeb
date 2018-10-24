function btnCalculer_onclick()
{ 
     var kid,Etudiant,Vieux,billetnorm,Total;

     Etudiant=parseInt(document.getElementById("txtEtu").value);
     billetnorm=parseInt(document.getElementById("txtbillet").value);
     Vieux=parseInt(document.getElementById("txtvieux").value);

     Total=(Etudiant*12)+(billetnorm*20)+(Vieux*15);

     if((Etudiant+billetnorm+Vieux)>=5)
     {
          Total=Total-((Total*10)/100)
     }

    console.log("Votre Argent Canadien en Euro = "+Total);
}