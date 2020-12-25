name_of_the_student_array = [];

function submit() {
    for(var counter=1;counter<=4;counter++){
        var temp = document.getElementById("name_of_the_student_"+counter).value;
        console.log(temp);
        name_of_the_student_array.push(temp);
    }
    var display_name_of_the_student = [];
      console.log(name_of_the_student_array);
      for(var counter2=0;counter2<=3;counter2++){
         display_name_of_the_student.push("<h1> NAME - "+name_of_the_student_array[counter2]+"<h1>");
      }
      console.log(display_name_of_the_student);
      document.getElementById("display_name_with_commas").innerHTML = display_name_of_the_student;
      var removecommas = display_name_of_the_student.join(" ");
      console.log(removecommas);
      document.getElementById("display_name_without_commas").innerHTML = removecommas;
    
        document.getElementById("submit_button").style.display = "none";
     document.getElementById("sort_button").style.display = "inline-block"; 
    }