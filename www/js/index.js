            //number
            function rekenCijfer(cijfer){
                var display=document.display.som.value;

                if(display.length>=15){
                    alert("Error: Sum can't be longer than 15 numbers and operators");
                }
                else{
                    document.display.som.value+=cijfer;
                    document.display.som.scrollLeft=document.display.som.scrollWidth;
                }
            }
            
            //operator
            function rekenTeken(operator){
                var display=document.display.som.value;

                if(display.length>=15){
                    alert("Error: Sum can't be longer than 15 numbers and operators");
                }
                else{
                    document.display.som.value+=operator;
                    document.display.som.scrollLeft=document.display.som.scrollWidth;
                }
            }

            //answer
            var display=document.getElementById('rekenmachine');
            function uitkomst(){
                var som=document.display.som.value;
                var answer=eval(som);

                if(eval(som)=="Infinity"){
                    alert("Error: Divide by zero");
                }
                else if(som==""){
                    alert("Error: Nothing to calculate");
                }
                else if(som=="707+707"){
                    alert("hihi");
                }
                else{
                    document.getElementById('antwoord').value=answer;
                    document.display.som.scrollLeft=document.display.som.scrollWidth;

                    display.style.height="200px";
                    display.style.whiteSpace="normal";
                    display.setAttribute("onClick", "contract();");
                }
            }

            //clear screen
            function wisScherm(){
                document.display.som.value="";
                document.display.answer.value="";
                display.style.height="80px";
            }

            function contract(){
                display.style.height="80px";
            }