$(document).ready(function(){

    //Quiz
    var totalQuestions = 15;
    var correctAnswers = 0;
    var questionsAnswered = 0;
    var timeUp = false;

    $("#submit").on("click", function(){
        ValidateAnswers();
    });

    //Progress bar
    $(".answer").on("click", function(){
        Advance();
    });

    $("#text-answer").on("change", function(){
        Advance();
    });


    //Timer
    var tenMin = 600;
    var display = document.getElementById("timer");

    InitTimer(tenMin, display);

    function InitTimer(time, display){

        var timer = time;
        var minutes;
        var seconds;

        setInterval(function(){

            timer--;

            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.innerHTML = minutes + ":" + seconds;

            if(minutes == 0 && seconds == 0){
                timeUp = true;
                ValidateAnswers();
            }

        },1000);
    }

    function Advance(){

        var progressbarWidth = 0;

        for(var i = 1; i < totalQuestions; i++){
            var questionAnswers = document.getElementsByName("q" + i + "-answer");
        
            for(var a = 0; a < questionAnswers.length; a++){
                if(questionAnswers[a].checked == true){
                    questionsAnswered += 1;
                    progressbarWidth += 6.6666666666666666666666666666667;
                }
            }
        }

        if(document.getElementById("text-answer").value != ""){
            questionsAnswered += 1;
            progressbarWidth += 6.6666666666666666666666666666667;
        }

        $("#progressbar").css("width", progressbarWidth + "%");
    }

    function ValidateAnswers(){
        if(document.getElementById("a3").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a6").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a9").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a16").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a20").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a23").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a28").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a30").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a36").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a37").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a41").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a44").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a46").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("a47").checked == true){
            correctAnswers += 1;
        }
        if(document.getElementById("text-answer").value == "15"){
            correctAnswers += 1;
        }

        if(!timeUp){
            alert("Congrats! You finished with " + correctAnswers + " out of 15 correct.");
        }else{
            alert("Time's up. You finished with " + correctAnswers + " out of 15 correct. Thank you for participating.");
        }

        window.location.href = "index.html";
    }

});