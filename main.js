$(document).ready(function() {
  AOS.init();

  document.getElementById("wheretogo").style.visibility = "hidden";
  document.getElementById("doshanumbers").style.visibility = "hidden";


  $("button").click(function() {
    var favorite = [];
    $.each($("input[name='question1']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question2']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question3']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question4']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question5']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question6']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question7']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question8']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question9']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question10']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question11']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question12']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question13']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question14']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question15']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question16']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question17']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question18']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question19']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question20']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question21']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question22']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question23']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question24']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question25']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question26']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question27']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question28']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question29']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question30']:checked"), function() {
      favorite.push($(this).val());
    });
    $.each($("input[name='question31']:checked"), function() {
      favorite.push($(this).val());
    });

    document.getElementById("wheretogo").style.visibility = "visible";
    document.getElementById("doshanumbers").style.visibility = "visible";


    counts = {};

    jQuery.each(favorite, function(key, value) {
      if (!counts.hasOwnProperty(value)) {
        counts[value] = 1;
      } else {
        counts[value]++;
      }
    });

    console.log(counts.wind);
    console.log(counts.fire);
    console.log(counts.water);

    function percentage(partialValue, totalValue) {
        return ((100 * partialValue) / totalValue).toFixed(2);
    } 

    if(counts.wind == undefined){ counts.wind = 0 }
    if(counts.fire == undefined){ counts.fire = 0 }
    if(counts.water == undefined){ counts.water = 0 }

    var pwind = percentage(counts.wind, counts.wind+counts.fire+counts.water);
    var pfire = percentage(counts.fire, counts.wind+counts.fire+counts.water);
    var pwater = percentage(counts.water, counts.wind+counts.fire+counts.water);


    var htmlwind = ' ';
    var htmlfire = ' ';
    var htmlwater = ' ';

    for (var i = 0; i < counts.wind; i++) {
      htmlwind = htmlwind + '<i class="fas fa-wind result"></i>';
    }

    for (var i = 0; i < counts.fire; i++) {
      htmlfire = htmlfire + '<i class="fas fa-fire result"></i>';
    }

    for (var i = 0; i < counts.water; i++) {
      htmlwater = htmlwater + '<i class="fas fa-tint result"></i>';
    }

    if (counts.wind) {
      document.getElementById("windresult").innerHTML = counts.wind + htmlwind;
    } else {
      document.getElementById("windresult").innerHTML = 0;
    }

    if (counts.fire) {
      document.getElementById("fireresult").innerHTML = counts.fire + htmlfire;
    } else {
      document.getElementById("fireresult").innerHTML = 0;
    }

    if (counts.water) {
      document.getElementById("waterresult").innerHTML = counts.water + htmlwater;
    } else {
      document.getElementById("waterresult").innerHTML = 0;
    }

    document.getElementById("percentages").innerHTML = '<b>'+pwind+'% <span id="vata">Vata</span></b> <br> <b>'+pfire+'% <span id="pitta">Pitta</span> </b> <br>  <b>'+pwater+'% <span id="kapha">Kapha</span> </b>';
    

    myChart = new Chart(document.getElementById("polar-chart"), {
      type: "doughnut",
      data: {
        labels: ["Vata", "Pitta", "Kapha"],
        datasets: [
          {
            label: "Dosha",
            backgroundColor: ["lightcoral", "orange", "lightblue"],
            data: [counts.wind, counts.fire, counts.water]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Dosha Imbalance"
        }
      }
    });
  });
});
