function btnCalculer_onclick()
{ 
 	var ChoixVet,NbrJours,Toilettage,race,cout;

 	ChoixVet=document.getElementById("lstVeterinaire").value;
 	NbrJours=parseInt(document.getElementById("txtNbreJours").value);

    if(document.getElementById("chkServ").checked == true)
    {
        Toilettage=5;
    }
    else
    {
        Toilettage=0;
    }

    if(document.getElementById("radChien").checked== true)
    {
        race = "chien";
        cout = 18,50;
    }
    else
    {
        race= "chat";
        cout=  16,95;
    }

}