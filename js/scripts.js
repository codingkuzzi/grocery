$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = [$("#favorite1").val(), $("#favorite2").val(), $("#favorite3").val(), $("#favorite4").val(), $("#favorite5").val(),
    $("#favorite6").val(), $("#favorite7").val(), $("#favorite8").val()];
    blanks.sort();

    blanks.forEach(function(blank) {

      $("ul").append($("<li>" + blank + "</li>"));

    });

    event.preventDefault();
  });
});
