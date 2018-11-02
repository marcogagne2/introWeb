function btnCalculer_onclick()
{ 
 	var jour,valeurjour;

    valeurjour=document.getElementById("txtNumSem").value;

    if (valeurjour==1)
    {
        jour = "Dimanche"
    }
    else
            {
                if(valeurjour==2)
                {
                    jour="Lundi"
                }
                else
                    {
                        if(valeurjour==3)
                        {
                            jour="Mardi"
                        }
                        else
                        {
                            if(valeurjour==4)
                            {
                                jour="Mercredi"
                            }
                            else
                                {
                                    if(valeurjour==5)
                                    {
                                        jour="Jeudi"
                                    }
                                    else
                                    {
                                        if (valeurjour==6)
                                        {
                                            jour="Vendredi"
                                        }
                                        else
                                        {
                                            jour="Samedi"
                                        }
                                    }
                                }
                        }

                    }
            }


    document.getElementById("lblMessage").innerHTML = "Votre Jour est "+ jour;

}