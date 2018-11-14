var tabjoueur,tabPoint,Note,Nom,cpt;

tabjoueur=new Array(4);
tabPoint=new Array(4);
cpt=0;

function btnAjouter_onclick()
{
    Nom=document.getElementById("txtNom").value;
    Note=parseInt(document.getElementById("txtPoints").value);
    tabjoueur[cpt]=Nom;
    tabPoint[cpt]=Note;
    btndisable_desactiver();

    switch(cpt)
    {
        case 0: document.getElementById("lblNbreJoueur").innerHTML =("Numéro du joueur 2");
        break;
        case 1:document.getElementById("lblNbreJoueur").innerHTML =("Numéro du joueur 3");
        break;
        case 2:document.getElementById("lblNbreJoueur").innerHTML =("Numéro du joueur 4")
        ;break;
    }
    cpt++;
}
function btndisable_desactiver()
{
    if(cpt===3)
    {
        document.getElementById("btnAjouter").disabled=true;
        document.getElementById("btnRechercher").disabled=false;
        document.getElementById("btnTrouverMoy").disabled=false;
        document.getElementById("btnTrouverMeilleur").disabled=false;
        document.getElementById("btnTrouverPire").disabled=false;
    }
}
function btnTrouverMoy_onclick()
{
    Moy=TrouverMoyenne();
    document.getElementById("lblReponse").innerHTML =("Votre Moyenne est de "+Moy);
}
function TrouverMoyenne()
{
    var TotNbr,moy;

    TotNbr=0;

    for(i=0;i<tabjoueur.length;i++)
    {
        TotNbr += tabPoint[i];
    }

    moy=TotNbr/tabPoint.length;

    return moy;
}
function btnTrouverMeilleur_onclick()
{
    var vargrande,personne;

    vargrande = tabPoint[TrouverMeilleur()];
    personne = tabjoueur[TrouverMeilleur()];
    document.getElementById("lblReponse").innerHTML =("Votre nombre le plus grand est "+vargrande+" et il appartient à "+personne);
}
function TrouverMeilleur()
{
    var i,vargrande,personne;
    vargrande = 0;

    for (i = 0; i < tabjoueur.length; i++)
    {
        if (tabPoint[i] > vargrande)
        {
            vargrande = tabPoint[i];
            personne = tabjoueur[i];
        }
    }

    return i;
}
function btnTrouverPire_onclick()
{
    var varpettite,personne;;

    varpettite=tabPoint[TrouvePire()];
    personne=tabjoueur[TrouvePire()];
    document.getElementById("lblReponse").innerHTML =("Votre nombre le plus petit est "+varpettite+" et il appartient à "+personne);
}
function TrouvePire()
{
    var i,varpettite,personne;

    varpettite=999999999999;

    for (i = 0; i < tabjoueur.length; i++)
    {
        if (tabPoint[i] < varpettite)
        {
            varpettite = tabPoint[i];
            personne = tabjoueur[i];
        }
    }
    return i;
}
function btnRechercher_onclick()
{
    for(i=0;i<tabjoueur.lenght;i++)
    {
        if(tabjoueur[i]=== Nom)
        {
            document.getElementById("lblReponse").innerHTML =("Le nombre du joueur correspondant est"+tabPoint[i]);
        }
    }

}