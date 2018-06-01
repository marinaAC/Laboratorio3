function logPerson() {
  var uss = $("#usuario").val();
  var pass = $("#pass").val();
  var json = { email: uss, password: pass };
  console.log(json);
  ajax("POST", "http://localhost:3000/login", json);
}

function iconLoading() {
  $("#load").attr("hidden", false);
  $("#form").attr("hidden", true);
}

function loadingStop() {
  $("#form").attr("hidden", false);
  $("#load").attr("hidden", true);
}

function changeUrl() {
  var url = "index.html";
  $(location).attr("href", url);
}

function errorUss() {
  $("#mError-us").attr("hidden", false);
  $("#mError-ps").attr("hidden", false);
  $("#usuario").addClass("error");
  $("#pass").addClass("error");
}
