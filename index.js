$(document).ready(function() {
    $('#enter').on('click', function() {

        $('.text').text('');
        $('.x1').text('');
        $('.x2').text('');


         let a = $('#coof-a').val();
         let b = $('#coof-b').val();
         let c = $('#coof-c').val();

         if(!a || !b || !c) {
              alert('Fill in all the fields!');
        } else {
          
         let d = b ** 2 - 4 * a * c;
         console.log(d); 
         
         if (a === 0 && b !== 0) {
                  let x = c / b;

                  $('.1').text(x);
          } else if (a !== 0 && b === 0) {
                  let x = (c / a) ** 0.5;

             $('.1').text(x);
          } else if (d < 0) {
               
                  $('.1').text('No solutions');
                  $('.2').text('No solutions');
          } else if(d === 0) {

                  let x = -b / 2 * a;
                  console.log(x);

                  $('.1').text(x);
                  $('.2').text('');
          } else if(d > 0) {

                  let x1 = (-b + Math.sqrt(d)) / (2 * a);
                  let x2 = (-b - Math.sqrt(d)) / (2 * a);
                  console.log(x1, x2);

                  $('.1').text(x1);
                  $('.2').text(x2);
               }

            }
        })

    })
