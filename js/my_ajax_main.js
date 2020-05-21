$("#btn").click(function(event){
  let name = $("#name").val();
  let gender = $("#gender option:selected").text();
  let date = $("#date").val();
  let class1 = $("#class option:selected").text();
  console.log(gender+" "+name+" "+date+" "+class1);


$.ajax({
    url: "https://raw.githack.com/AnastasiaPi/Ajax/master/index.html",
    type:     "POST",
    dataType: "json",
    data: {name:name,gender:gender,date:date},
    success: function(data) { //Данные отправлены успешно
        // console.log(data.name)
        $('#result_form').text(data);
    },
    error: function(data) { // Данные не отправлены
        $('#result_form').text('Error data is not sent');
    }
  });
  $.ajax({
      type:"get",
      url:"https://raw.githack.com/AnastasiaPi/Ajax/master/index.html",
      data:"html",
      success:function(response){
          alert("All it`s good")
      },
      error: function(response){
          alert("Someting wrong")
      }
  });
 });
