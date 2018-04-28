       //AJAX
        //se basa en xmlrequest, que permite generar obj de post y get, con param y sin param
        //abrir el servidor, node index.js
        //Esto nos permite crear las peticiones por servidor
        // var httpReq = new XMLHttpRequest();

        // //Como una funcion anonima
        // var callBack = function () {
        //     console.log("Llego info del servidor"+httpReq.readyState);
        //     if(httpReq.readyState==4){
        //         //No quiere decir que sea satifactorio, pero tenemos una respuesta por parte del servidor
        //         if(httpReq.status==200){
        //             console.log(httpReq.responseText);
        //         }else{
        //             alert("Ocurrio un error en el servidor " + httpReq.status);
        //         }
        //     }
        // }

        // httpReq.onreadystatechange = callBack;

        // //open: Abre una conexion con el servidor
        // httpReq.open("GET", "http://localhost:3000/login", true);
        // httpReq.send();



        // var httpGetDos = new XMLHttpRequest();
        // var callBack2 = function(){
        //     if(httpGetDos.readyState==4){
        //         if(httpGetDos.status==200){
        //             console.log("Ingreso, mostrara el mensaje que envia el servidor")
        //             console.log(httpGetDos.responseText);
        //         }else{
        //             alert("Ocurrio un error dos "+ httpGetDos.status);
        //         }
        //     }
        // }
        // httpGetDos.onreadystatechange = callBack2;
        // //"http://localhost:3000/loginUsuario?usr="+ document.getElementById()+"&pass="+document.getElementById()
        // httpGetDos.open("GET","http://localhost:3000/loginUsuario?usr=usuario&pass=1234", true);
        // httpGetDos.send();


        //Por post se envian en el send

        var httpPost = new XMLHttpRequest();
        var callBack3 = function () {
            loadingWait();
            if (httpPost.readyState == 4) {
                if (httpPost.status == 200) {
                    console.log("Ingreso, esta es la respuesta");
                    loadingFinish();
                    console.log(httpPost.responseText);
                    if(httpPost.responseText == "false"){
                        document.getElementById("usr").className = "error";
                        document.getElementById("mError-us").hidden = false;
                        document.getElementById("pass").className = "error";
                        document.getElementById("mError-ps").hidden = false;                        
                    }
                } else {
                    alert("Ocurrio un error tres " + httpPost.status);
                }

            }
        }




        function EnviarServidor() {
            var uss = document.getElementById("usr").value;
            var pass = document.getElementById("pass").value;
            httpPost.onreadystatechange = callBack3;
            httpPost.open("POST", "http://localhost:3000/loginUsuario", true);
            httpPost.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            httpPost.send("usr=" + uss + "&pass=" + pass);
        }

        function loadingWait() {
            document.getElementById("load").hidden = false;
            document.getElementById("form").hidden = true;
        }

        function loadingFinish() {
            document.getElementById("load").hidden = true;
            document.getElementById("form").hidden = false;
        }



        // var loadingWait = function () {
        //     document.getElementById("load").hidden = false;
        //     document.getElementById("form").hidden = true;
        // }

        // var loadingFinish = function () {
        //     document.getElementById("load").hidden = true;
        //     document.getElementById("form").hidden = false;
        // }