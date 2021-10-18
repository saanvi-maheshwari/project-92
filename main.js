function login(){
    var player1 = document.getElementById("name1").value;
    var player2 = document.getElementById("name2").value;

    localStorage.setItem("Player_1", player1);
    localStorage.setItem("Player_2", player2);

    window.location="game.html";
}