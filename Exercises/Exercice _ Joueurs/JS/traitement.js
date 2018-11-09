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
    if(cpt==3)
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
    var Moy,TotNbr;

    TotNbr=0;

    for(i=0;i<tabjoueur.length;i++)
    {
        TotNbr += tabPoint[i];
    }

    Moy=TotNbr/tabPoint.length;
    document.getElementById("lblReponse").innerHTML =("Votre Moyenne est de "+Moy);
}
function btnTrouverMeilleur_onclick()
{
    var vargrande,personne;
    vargrande = 0;

    for (i = 0; i < tabjoueur.length; i++)
    {
        if (tabPoint[i] > vargrande)
        {
            vargrande = tabPoint[i];
            personne = tabjoueur[i];
        }
    }
    document.getElementById("lblReponse").innerHTML =("Votre nombre le plus grand est "+vargrande+" et il appartient à "+personne);
}
function btnTrouverPire_onclick()
{
    var varpettite,personne;

    varpettite=999999999999;

    for (i = 0; i < tabjoueur.length; i++)
    {
        if (tabPoint[i] < varpettite)
        {
            varpettite = tabPoint[i];
            personne = tabjoueur[i];
        }
    }
    document.getElementById("lblReponse").innerHTML =("Votre nombre le plus petit est "+varpettite+" et il appartient à "+personne);
}