            var a
            var b
            var c
            var x
            //first number
            function rekenCijfer(cijfer){
                x=cijfer;
                document.rekenmachine.vak1.value+=x;
            }
            
            //operator
            function rekenTeken(teken){
                y=teken;
                document.rekenmachine.vak1.value+=y;
            }

            function uitkomst(){
                var test = document.rekenmachine.vak1.value;
                document.rekenmachine.vak1.value=eval(test);
            }

            function wisScherm(){
                document.rekenmachine.vak1.value="";
            }