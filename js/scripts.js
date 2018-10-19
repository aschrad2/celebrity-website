$(document).ready(function(){
  $("form#crush-quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
      
    if (age) {
      var ans = "";
      if (gender === 'male' && age < 26) {
        ans = "Nick Jonas"
      } else if 
        (gender === 'male' && age >= 26) {
          ans = "Bradley Cooper"
      } else if 
        (gender === 'female' && age < 26) {
          ans = "Chris Hemsworth"
      } else if 
        (gender === 'female' && age >= 26) {
          ans = "Liam Hemsworth"
      }
        $('#crush').text(ans);
        $("#quote").show()
    }
    event.preventDefault();
  });
});