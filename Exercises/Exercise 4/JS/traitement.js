function btnCalculer_onclick()
{ 
     var ArgentCAN,TauxChangeEuro,Euro;

     ArgentCAN=parseFloat(document.getElementById("txtArgCAN").value);
    TauxChangeEuro=parseFloat(document.getElementById("txtTauxChange").value);
     Euro=(ArgentCAN*TauxChangeEuro);
     console.log("Votre Argent Canadien en Euro = "+Euro);

}