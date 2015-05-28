/*!
 * JS get_url by Renan Pantoja Vilas
 * Licensed under Apache License Version 2.0, January 2004
 */

    var url = window.location;               //pega a atual url completa         //takes the current full url
    url = url.toString();                    //converte para string              //cast to string
    var par = "exemplo2=";                   //parametro que espera receber      //parameter which is expected
    var p_n = par.length;                    //tamanho do parametro em numero    //parameter size in number
    var lug = url.indexOf(par) + p_n;        //verifica onde está o parametro    //checks where the parameter
    var tam = url.length;                    //pega o valor total da url         //takes the total value of the url
    var cut = url.substring(lug,tam);        //corta a variavel no parametro     //cuts the variable

    if(cut.indexOf('&') != -1){              //verifica se há mais parametros    //checks for more parameters
        var s_e = cut.indexOf('&');          //verifica onde está o &            //checks where the &
        var fim = cut.substring(0,s_e);      //corta novamente até o &           //cut again until &
    } else {                                 //se não houver & cai na excessão   //if there is no & falls into the exception
        var fim = cut;                       //como não há & cut é o valor final //as there is no & cut is the final value
    }

    //alert(fim);                              //teste com alert                   //test alert

    if (fim == 'red') {                                             //exemplo2=red
        document.getElementById('teste').style.color = 'red';
    } else if (fim == 'green') {                                    //exemplo2=green
        document.getElementById('teste').style.color = 'green';
    } else if (fim == 'blue') {                                     //exemplo2=blue
        document.getElementById('teste').style.color = 'blue';
    } else {}