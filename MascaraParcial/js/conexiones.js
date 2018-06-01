/**
 * Conexiones al servidor por medio de jquery
 */

/**
 * url: donde enviaremos la peticion
 * type: si es del tipo GET o POST
 * data: datos que enviaremos
 * datatype: si esperamos un tipo de respuesta expecifico (XML, HTML, JSON, SCRIPT)
 * asyn : si esperamos sincronica o asincronica
 *  .done: Si la petición Ajax se ha realizado correctamente, entra en este método. En data están los datos enviados por el servidor.
    .fail: Se ejecuta si ha ocurrido algún problema en la petición, por ejemplo cuando la url especificada no existe.
    .always: Como su nombre indica, se ejecuta siempre, independientemente si la petición es correcta o no. Muy útil si por ejemplo queremos quitar una imagen o texto indicando que se están cargando datos.
 */
function ajax(metodo, endpoint, parametros) {
  var response = $.ajax({
    url: endpoint,
    data: parametros,
    dataType: "json",
    type: metodo,
    beforeSend: iconLoading(),
    success: function(resp) {
      checkResponseServ(resp, parametros);
    }
  });
  return response;
}

function saveLocalStorage(objJson, tipoDato) {
  var dataLocalStorage = JSON.parse(localStorage.getItem(tipoDato));
  var retorno = false;
  if (dataLocalStorage == null) {
    var listDato = [];
    listDato.push(objJson);
    localStorage.setItem(tipoDato, JSON.stringify(listDato));
    retorno = true;
  } else {
    dataLocalStorage.push(objJson);
    localStorage.setItem(tipoDato, JSON.stringify(dataLocalStorage));
    retorno = true;
  }
  return retorno;
}

function checkResponseServ(respuesta, parametros) {
  console.log(respuesta);
  if (respuesta.type == "error") {
    console.log("error");
    errorUss();
    loadingStop();
  } else {
    var oJson = { type: respuesta.type, email: parametros.email };
    saveLocalStorage(oJson, "historial");
    changeUrl();
  }
}
