function btnCalculer_onclick()
{ 
 	var ChoixVet,NbrJours,Toilettage,Toilettagemot,race,cout,Total;

 	ChoixVet=document.getElementById("lstVeterinaire").value;
 	NbrJours=parseInt(document.getElementById("txtNbreJours").value);


    if(document.getElementById("chkServ").checked == true)
    {
        Toilettage=5;
        Toilettagemot="avec";
    }
    else
    {
        Toilettage=0;
        Toilettagemot="sans";
    }

    if(document.getElementById("radChien").checked == true)
    {
        race = "chien";
        cout = 18.50;
    }
    else
    {
        race= "chat";
        cout=  16.95;
    }

    Total=(NbrJours*cout)+(((NbrJours*cout)*14.975)/100)+Toilettage;

    console.log("Vétérinaire responsable est "+ ChoixVet+".Le montant est de "+Total.toFixed(2)+" pour "+NbrJours+" jours ,"+Toilettagemot+" service de toilettage.");

}