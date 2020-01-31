
            //Variables
            var iconoActualizarDisponible = document.getElementById('iconoActualizarDisponible');
            var iconoActualizarBox = document.getElementById('iconoActualizarBox');
            var resultadoDisponible = document.getElementById("resultadoDisponible");
            var iconAddPocket = document.getElementById('icon-add-pocket');
            var iconAddCard = document.getElementById('icon-add-card');
            var valorPocket = document.getElementById('valorPocket');
            var valorCard = document.getElementById('valorCard');
            var iconoActualizarDisponible2 = document.getElementById("iconoActualizarDisponible2");
            var disponibleSpan = document.getElementById('disponibleSpan');
            var total = document.getElementById('total');

            
            // end Variables

            //estado inicial
            disponibleSpan.style.display = "none";
            total.style.display = "none";
            resultadoDisponible.style.display = "none";
            valorPocket.style.display = "none";
            valorCard.style.display = "none";

            //lista items
            document.getElementById('abrir-producto').style.display="block";
            document.getElementById('usar-plate').style.display="none";
            document.getElementById('mas-servicios').style.display="none";

            //Iconos 
            document.getElementById('icon-wear-gray').style.display="block";
            document.getElementById('icon-wear-red').style.display="none";

            document.getElementById('icon-open-red').style.display="block";
            document.getElementById('icon-open-gray').style.display="none";
           
            document.getElementById('icon-services-gray').style.display="block";
            document.getElementById('icon-services-red').style.display="none";
            //end estado inicial

            //Cambiar tamaño letra circulo principal
            var valor = resultadoDisponible.innerHTML = "$00.000.000.00";
            console.log(valor.length, "375");
            if (valor.length < 12) {
                document.getElementById('resultadoDisponible').style.fontSize = "24px"
            }
            else if (valor.length > 12) {
                document.getElementById('resultadoDisponible').style.fontSize = "20px";
                console.log("hay menos de 10");
            }

            //Cambiar tamaño en circulos pequeños 
            var valorTarjetaVirtual = valorCard.innerHTML = "$00.000.000.00";
            var valorBolsillo = valorPocket.innerHTML = "$00.000.000.00";
            console.log(valorTarjetaVirtual.length, "386");
            if (valorTarjetaVirtual.length < 12 && valorBolsillo.length < 12) {
                document.getElementById('valorTarjeta').style.fontSize = "17px"
            }
            else if (valorTarjetaVirtual.length > 12 && valorBolsillo.length > 12) {
                document.getElementById('valorTarjeta').style.fontSize = "11px";
                console.log("hay menos de 10");
            }
            //Bolsillo y tarjetas
            function changeUpdate(e) {
                setTimeout(() => {
                    //A ocultar
                    iconoActualizarDisponible.style.display = "none";
                    iconoActualizarBox.style.display = "none";
                    valorPocket.style.display = "none";
                    valorCard.style.display = "none";
                    iconoActualizarDisponible2.style.display = "none";
                    iconoActualizarBox.style.display = "none";
                    valorPocket.style.display = "none";
                    valorCard.style.display = "none";
                    iconAddCard.style.display = "none";
                    iconAddPocket.style.display = "block";

                    //Mostrar
                    disponibleSpan.style.display = "block";
                    total.style.display = "block";
                    resultadoDisponible.style.display = "block";
                    valorPocket.style.display = "none";
                    valorCard.style.display = "block";

                    console.log("sdfghj");
                }, 3000);
            }



            function goToOpenProductShow(){
                document.getElementById('abrir-producto').style.display="block";
                document.getElementById('usar-plate').style.display="none";
                document.getElementById('mas-servicios').style.display="none";

                document.getElementById('icon-open-red').style.display="block";
                document.getElementById('icon-open-gray').style.display="none";

                document.getElementById('icon-wear-gray').style.display="block";
                document.getElementById('icon-wear-red').style.display="none";

            }

            //mostrar en menu de usar plata
            function goToWearSilverShow() {
                document.getElementById('abrir-producto').style.display="none";
                document.getElementById('usar-plate').style.display="block";
                document.getElementById('mas-servicios').style.display="none";

                document.getElementById('icon-open-red').style.display="none";
                document.getElementById('icon-open-gray').style.display="block";

                document.getElementById('icon-services-gray').style.display="block";
                document.getElementById('icon-services-red').style.display="none";

                document.getElementById('icon-wear-gray').style.display="none";
                document.getElementById('icon-wear-red').style.display="block";


            }
            //mostrar en menu de Más servicios
            function goToMoreServicesShow() {
                document.getElementById('abrir-producto').style.display="none";
                document.getElementById('usar-plate').style.display="none";
                document.getElementById('mas-servicios').style.display="block";

                document.getElementById('icon-open-red').style.display="none";
                document.getElementById('icon-open-gray').style.display="block";

                document.getElementById('icon-services-gray').style.display="none";
                document.getElementById('icon-services-red').style.display="block";

                document.getElementById('icon-wear-gray').style.display="block";
                document.getElementById('icon-wear-red').style.display="none";
            }

            //Click para mostrar modal
            function showModal(){
              document.getElementById('popup').style.display="block";
            }
            function hideModal(){
                document.getElementById('popup').style.display="none";
            }

        
    
            //Mostrar y ocultar detalles 

            document.getElementById('details').style.display="none";