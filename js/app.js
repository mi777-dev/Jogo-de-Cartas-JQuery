$( document ).ready(function() {

  //Evento para el botón mas (+)
  $("#mas").click(function(){

  });

  //Evento para el botón menos (-)
  $("#menos").click(function(){

  });

  //Evento al hacer click en una carta
  $(document).on("click", "img.carta", function(){

  });

  //Evento de hover
  $(document).on({
    //Función al mouse estar sobre la carta
    mouseenter: function(){

    },

    //Funcao do mouse deixar la carta
    mouseleave: function(){

    }
  }, "img.carta");


});
$( document ).ready(function() {

  //Evento para o botao mais (+)
  $("#mais").click(function(){
    $(".carta:last-of-type").after("<img src='imagem/back.jpg' class='carta'/>");
  });

  //Evento para o botao menos (-)
  $("#menos").click(function(){
    $(".carta:last-of-type").remove();
  });

  //Evento ao clicar em uma carta
  $(document).on("click", "img.carta", function(){
    //Funcao que carrega uma imagem aleatoria à carta
    $(this).attr("src",function(){
      var numero = Math.floor((Math.random() * 52) + 1);
      var rota = "imagem/"+numero+".png";
      return rota;
    });

    //Calculo do número da carta no baralho e mostra na tela
    var rota = $(this).attr("src");
    var numeroCarta = rota.slice(0,-4);
    numeroCarta = numeroCarta.substr(6,2);
    $("#conteudo-tela").html("A carta é o número: <b>" + numeroCarta + "</b> do baralho");
  });

  //Evento de hover
  $(document).on({
    //Funcao do mouse quando estar sobre a carta
    mouseenter: function(){
      $(this).addClass("carta-selecionada");
      $(this).css("border","2px solid yellow");
    },

    //Funcao do mouse ao deixar a carta
    mouseleave: function(){
      $(this).removeClass("carta-selecionada");
      $(this).addClass("carta");
      $(this).css("border","0px");
    }
  }, "img.carta");


});
