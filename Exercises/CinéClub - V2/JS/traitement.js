function btnCalculer_onclick()
{
    var Age,Cout,Prix,Rabais,Film,Temps;

    Prix=parseInt(document.getElementById("txtBasePrix").value);
    Age= parseInt(document.getElementById("txtAge").value);
    Film=document.getElementById("lstFilm").value;
    Midi=document.getElementById("radMidi").value;
    Soir=document.getElementById("radSoir").value;

    if(document.getElementById("chkServ").checked == true)
        {
        if(Age<=16)
        {
            if(document.getElementById("radMidi").checked == true)
            {
                Rabais=(60/100);
            }
            else
            {
                Rabais=(40/100);
            }
        }
        else
        {
            if (document.getElementById("radMidi").checked == true)
            {
                Rabais = (30 / 100);
            }
            else
            {
                Cout = Prix;
            }
        }
    }
    else
    {
        Cout = Prix;
        Rabais = 0;
    }
    if(document.getElementById("radMidi").checked == true)
    {
        Temps ="Midi";
    }
    else
    {
        Temps="Soir";
    }

    Cout=Prix-(Prix*Rabais);
    console.log("Un billet du "+Temps+" pour un spectateur de "+Age+" ans coûte "+Cout+"$ pour le film "+Film);

}