$(document).ready(function() {

  AOS.init();

    $("button").click(function(){
        var favorite = [];
        $.each($("input[name='question1']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question2']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question3']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question4']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question5']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question6']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question7']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question8']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question9']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question10']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question11']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question12']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question13']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question14']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question15']:checked"), function(){favorite.push($(this).val());});
        $.each($("input[name='question16']:checked"), function(){favorite.push($(this).val());});

        
        counts = {};

        jQuery.each(favorite , function(key,value) {
        if (!counts.hasOwnProperty(value)) {
            counts[value] = 1;
        } else {
            counts[value]++;
        }
        });
        console.log(counts.wind);
        console.log(counts.fire);
        console.log(counts.water);

        new Chart(document.getElementById("polar-chart"), {
            type: 'doughnut',
            data: {
              labels: ["Vata", "Pitta", "Kapha"],
              datasets: [
                {
                  label: "Dosha",
                  backgroundColor: ["lightcoral", "orange","lightblue"],
                  data: [counts.wind, counts.fire, counts.water]
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'Dosha Imbalance'
              }
            }
        });

    });
});

