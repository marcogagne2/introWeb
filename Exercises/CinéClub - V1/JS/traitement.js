function btnCalculer_onclick()
{
    var Age,Cout,Prix,Rabais;

    Prix=parseInt(document.getElementById("txtBasePrix").value);
    Age= parseInt(document.getElementById("txtAge").value);

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
        if(document.getElementById("radMidi").checked == true)
        {
            Rabais=(30/100);
        }
        else
        {
            Cout=Prix;
        }
    }
    Cout=Prix-(Prix*Rabais);
    console.log("Votre cout de billet avec réduction sera de "+Cout+"$");
}