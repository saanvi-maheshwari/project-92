get_p1 = localStorage.getItem("Player_1");
get_p2 = localStorage.getItem("Player_2");

score1 = 0;
score2 = 0;

document.getElementById("p1_score").innerHTML = score1;
document.getElementById("p2_score").innerHTML = score2;

document.getElementById("p1_name").innerHTML = get_p1;
document.getElementById("p2_name").innerHTML = get_p2;

document.getElementById("QT").innerHTML = "Question Turn - " + get_p1;
document.getElementById("AT").innerHTML = "Answer Turn - " + get_p2;

function send(){
    number1 = document.getElementById("no1_input").value;
    number2 = document.getElementById("no2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1+ " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";  
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button; 

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
} 

function check(){
get_answer = document.getElementById("input_box").value;
if(get_answer==actual_answer)
{
if(answer_turn=="player1"){
update_player1_score = player1_score+1;
document.getElementById("player1_score").innerHTML = update_player1_score;
}
else{
    update_player2_score = player2_score+1;
    document.getElementById("player2_score").innerHTML = update_player2_score;
}
}
}
if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("QT").innerHTML = "Question Turn - " + get_p2;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("QT").innerHTML = "Question Turn - " + get_p1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("AT").innerHTML = "Answer Turn - " + get_p2 ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("AT").innerHTML = "Answer Turn - " + get_p1;
	}

    document.getElementById("output").innerHTML = "";
