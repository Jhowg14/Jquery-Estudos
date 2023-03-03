//doble click
$(document).ready(function(){
  $("p").dblclick(function(){
    $(this).hide(500);
  });
  //mouse down faz o mesmo que click
  $("#p3").mousedown(function(){
    $(this).css("background-color", "red");
  });
  //hover faz o mesmo que mouseenter e mouseleave
  $("#p1").hover(function(){
    $(this).css("background-color", "yellow");
  });
  $("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
  });
  //fade faz o mesmo que hide e show e toggle
  $("#button1").click(function(){
    $("#div1").fadeIn("slow");
    $("#div2").fadeOut("slow");
    $("#div3").fadeToggle(3000);
    $("#div3").fadeTo("slow", 0.4);
  });
  //slide- animação de deslizar
  $("#flip").click(function(){
    $("#panel").slideToggle("slow",function(){//callback
        alert("abriu");
    })
 });
 //animate- 
  $("#button2").click(function(){
    $("#animate").animate({
      height: 'toggle',
    },3000)
    .slideDown(1000)
    .slideUp(1000);
    $("#animate").animate({width: '300px', opacity: '0.8',fontSize: '3em'}, "slow");
    $("#stop").click(function(){
        $("#animate").stop();
      });
    });
    //attr- atributo value- valor
    $("#button3").click(function(){
        alert("Value: " + $("#test").val() +" "+ $("#test").attr("id"));
      });
    //remove- remove o elemento
    $("#button4").click(function(){
        $("p").remove(".test");
    });
    // addClass- adiciona classe removeClass- remove classe toggleClass- adiciona ou remove
    $("#button5").click(function(){
        $("h1, h2, p").toggleClass("blue");
        $("div").toggleClass("important blue");
      });
    //css- altera o css ou retorna o valor
    $("#button6").click(function(){
        alert("LETRA color = " + $("#p3").css("color"));
        $(".test").css({"font-size":"30px","background-color":"yellow"});
    });
    //height- retorna a altura width- retorna a largura e muda dimensão
    $("#button7").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#dimensao").width() + "</br>";
        txt += "Height of div: " + $("#dimensao").height() + "</br>";
        txt += "Outer width of div (margin included): " + $("#dimensao").outerWidth(true) + "</br>";
        txt += "Outer height of div (margin included): " + $("#dimensao").outerHeight(true);
        
        $("#dimensao").html(txt).width(300).height(300);
        
    });
      //parent- retorna o pai do elemento
      $("span").parent().css({"color": "red"});
      //parents- retorna todos os pais do elemento
      $("span").parents().css({ "border": "2px solid blue"});
      //parents - retorna todos os pais do elemento até o elemento especificado
      $("span").parents("ul").css({"color": "green", "border": "2px solid green"});
      //parentsUntil- retorna todos os pais do elemento até o elemento especificado
      $("span").parentsUntil("div").css({"border": "5px solid"});
      //children- retorna todos os filhos do elemento
      $("div").children().css({fontSize: "30px"});
      //find- retorna todos os filhos do elemento
      $("div").find("*").css({backgroundColor: "#EEE"});
      //siblings- retorna todos os irmãos do elemento- pode filtrar por irmao
    $("#button8").click(function(){
        $("span").siblings("h2").css({color: "blue",border: "2px solid red"});
        $("h2").nextAll().css({color: "red",border: "2px solid blue"});//nextall- retorna todos os irmãos seguintes
      });
      //first- retorna o primeiro elemento
      //last- retorna o ultimo elemento
      $("div").last().css({border: "2px solid red"});
      //add- adiciona um elemento ao elemento selecionado com texto
      $("p").add().css({boxShadow: "0 0 10px #000"});
      //append- adiciona um elemento ao elemento selecionado com texto
      $("p").append(" <b style=color:black>Appended text</b>.")
      //prepend- adiciona um elemento ao elemento selecionado com texto
      //eq- seleciona o elemento pelo indice
      $("p").eq(7).prepend(" <b style=color:purple>Prepended text</b>.")
      //filter- filtra os elementos selecionados pelo parametro
      $("p").filter(".test").css({border: "2px solid orange"});
      //not -retorna todos os elementos que não correspondem aos critérios.

      //load- carrega dado de um servidore colocando no elemento selecionado
      $("#button9").click(function(){
        $("#load").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success")
            alert("External content loaded successfully!");
          if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
      });
 


});
    function afterText() {
        var txt1 = "<b>I </b>";           // Create element with HTML
        var txt2 = $("<i></i>").text("love ");  // Create with jQuery
        var txt3 = document.createElement("b");   // Create with DOM
        txt3.innerHTML = "jQuery!";
        $("img").after(txt1, txt2, txt3);    // Insert new elements after img
    }