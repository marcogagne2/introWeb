function btnCalculer_onclick()
{ 
 	var ChoixVet,NbrJours,NbrHeures,Toilettage,Toilettagemot,race,cout,Total,Rabais,CoutVet;

 	ChoixVet=document.getElementById("lstVeterinaire").value;
 	NbrJours=parseInt(document.getElementById("txtNbreJours").value);
    NbrHeures=parseInt(document.getElementById("txtNbreHeures").value);


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
    if(NbrJours>=1&&NbrJours<5)
    {
        Rabais=0
    }
    else if(NbrJours>=5&&NbrJours<10)
    {
        Rabais=(cout*5)/100
    }
    else if(NbrJours>=10&&NbrJours<30)
    {
        Rabais=(cout*10)/100
    }
    else
    {
        Rabais=(cout*15)/100
    }
    switch(ChoixVet)
    {
        case "Audrey Bouchard":CoutVet=NbrHeures*25;
            break;
        case "Stéphane Tremblay":CoutVet=NbrHeures*35;
            break;
        case "Maxime Simard":CoutVet=NbrHeures*40;
            break;
        case "Mélissa Caron":CoutVet=NbrHeures*45;
            break;
    }

    Total=((NbrJours*cout)+(((NbrJours*cout)*14.975)/100)+Toilettage+CoutVet)-Rabais;

    console.log("Vétérinaire responsable est "+ ChoixVet+".Le montant est de "+Total.toFixed(2)+" pour "+NbrJours+" jours ,"+Toilettagemot+" service de toilettage.");
    document.getElementById("lblMessage").innerHTML =("Vétérinaire responsable est "+ ChoixVet+".Le montant est de "+Total.toFixed(2)+" pour "+NbrJours+" jours ,"+Toilettagemot+" service de toilettage.")
}
function radChoix1_onclick()
{
    var chien,chat;

    chien=document.getElementById("radimgChien").value;
    chat=document.getElementById("radimgChat").value;

    if(document.getElementById("radimgChien").checked == true)
    {
        document.getElementById("Img").innerHTML = "<img src='img/Dog.jpg'>";
    }
    if(document.getElementById("radimgChat").checked == true)
    {
        document.getElementById("Img").innerHTML = "<img src='img/lime-cat.jpg'>";
    }


}