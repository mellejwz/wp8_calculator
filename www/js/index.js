            //first number
            function rekenCijfer(cijfer){
                document.rekenmachine.vak1.value+=cijfer;
            }
            
            //operator
            function rekenTeken(teken){
                document.rekenmachine.vak1.value+=teken;
            }

            //answer
            function uitkomst(){
                var test = document.rekenmachine.vak1.value;
                document.rekenmachine.vak1.value=eval(test);
            }
            //clear screen
            function wisScherm(){
                document.rekenmachine.vak1.value="";
            }