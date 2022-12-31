// -----------------------------------------------
// -----------------main variables----------------
var p_gender = "male";
var p_bg = "park";
var p_difficulty = "STANDARD";

var rs = new Audio("audio/run.mp3");
rs.loop = true;
var js = new Audio("audio/jump.mp3");
var ds = new Audio("audio/dead.mp3");
var bs = new Audio("audio/WhatsApp Audio 2022-11-26 at 08.50.21.mpeg")


// -----------------------------------------------
// -----------------player select-----------------
function player_gender(event) {
    if (event == "m") {
        p_gender = "male";
        document.getElementById("selectGender").innerHTML = "You Select : MALE";

        // alert("male")
    }
    if (event == "f") {
        p_gender = "female"
        document.getElementById("selectGender").innerHTML = "You Select : FEMALE";

        // alert("male")
    }
}

// -----------------------------------------------
// ---------------------bg select-----------------
function select_bg(s_bg) {
    if (s_bg == "bg1") {
        document.getElementById("select_bgtxt").innerHTML = "You Select : jungle";
        p_bg = "jungle";
    }
    if (s_bg == "bg2") {
        document.getElementById("select_bgtxt").innerHTML = "You Select : ice";
        p_bg = "ice";
    }
    if (s_bg == "bg3") {
        document.getElementById("select_bgtxt").innerHTML = "You Select : park";
        p_bg = "park";
    }
}

// -----------------------------------------------
// ---------------------Difficulty----------------
var def_speed = 30;
function p_Difficulty(p_def) {

    if (p_def == "CASUAL") {
        alert("very slow  Very easy to play.  Gameplay is sloppy")
        def_speed = 50;
        start();
    }

    if (p_def == "STANDARD") {
        alert("very slow  Very easy to play.  Gameplay is sloppy")
        def_speed = 30;
        start();
        // begin_game()
        
    }

    if (p_def == "HARDCORE") {
        alert("The speed is quite high.  Takes a competitive style.  Quite tiring")
        def_speed = 20;
        start();

    }

    if (p_def == "ADVANCED") {
        alert("The speed is too high.  Difficult to play.  For skilled players")
        def_speed = 10;
        start();

    }
}

// -----------------------------------------------
// -------------------player menus----------------
function view_bg_menu() {
    document.getElementById("playerMenu").style.display = "none";
    document.getElementById("backgroundMenu").style.display = "block";

}
function Difficulty_menu() {
    document.getElementById("backgroundMenu").style.display = "none";
    document.getElementById("DifficultyMenu").style.display = "block";
}
function playAgain(){
    location.reload();
}
//----------------------------------------------------
//----------------------start game--------------------
function load_bg(bg) {
    if (bg == "jungle") {
        document.getElementById("gameBg").className = "gameBg1";
    }
    if (bg == "ice") {
        document.getElementById("gameBg").className = "gameBg2";
    }
    if (bg == "park") {
        document.getElementById("gameBg").className = "gameBg3";
    }
}

function begin_game(){
    start()
}

function start() {
    if (rw == 0) {
        
        document.getElementById("gameMenu").style.display = "none"
        document.getElementById("playerSelecter").style.display = "none"

        load_bg(p_bg);
        bw = setInterval(bg, def_speed);

        rw = setInterval(player_run, def_speed + 30)

        flames()
        fw = setInterval(flameMove, def_speed + 30)

        sw = setInterval(your_score, 750);
        

    }
}
function keyPad(event) {
    if (event.which == 13) {
        begin_game()
    }
    if (event.which == 32) {
        if (jw == 0) {
            clearInterval(rw);
            rs.pause();
            jw = setInterval(player_jump, def_speed + 45);
            js.play();
        }
    }
    else if(event.which == 27){
        // alert("esc");
        // pouseResume()
    }
}

// ----------------------------------------------------
// --------------------bg transform--------------------
var b = 0;
var bw = 0;

function bg() {
    b = b - 5;
    document.getElementById("gameBg").style.backgroundPositionX = b + "px";
}

// ----------------------------------------------------
// --------------------bg transform--------------------
var r = 1;
var rw = 0;
function player_run() {
    var rImg = document.getElementById("caracter");
    // p_gender = "male"
    
    r = r + 1;
    if (p_gender == "male") {

        if (r == 15) {
            r = 1
            rs.play();
        }
        rImg.src = "player1/Run (" + r + ").png";
    }

    if (p_gender == "female") {
        if (r == 19) {
            r = 1
        }
        rImg.src = "player2/Run (" + r + ").png";
    }
}
// -----------------------------------------------------
// -------------------------jump----------------------
var j = 1;
var jw = 0;
var mt = 430;
function player_jump() {
    var jimg = document.getElementById("caracter");

    if(p_gender == "male"){
        if (j <= 5) {
            mt = mt - 15;
        }
        if (j >= 10) {
            mt = mt + 15;
        }

        jimg.style.marginTop = mt + "px";

        j = j + 1;

        if (j == 15) {
            j = 1
            clearInterval(jw);
            jw = 0;
            rw = setInterval(player_run, def_speed + 30)
            rs.play();
        }
        jimg.src = "player1/Jump (" + j + ").png"
    }
    if(p_gender == "female"){
        if (j <= 14) {
            mt = mt - 2;
        }
        if (j >= 15) {
            mt = mt + 2;
        }

        jimg.style.marginTop = mt + "px";

        j = j + 1;

        if (j == 15) {
            j = 1
            clearInterval(jw);
            jw = 0;
            rw = setInterval(player_run, def_speed + 30)
        }
        jimg.src = "player2/Jump (" + j + ").png"
    }

}



// -----------------------------------------------------
// -------------------------flames----------------------
var a = 800;
var fid = 0;
function flames() {

    for (var y = 0; y < 100; y++) {
        var i = document.createElement("img");
        i.src = "icons/flame.gif";
        i.className = "f";
        i.style.marginLeft = a + "px"

        if (y <= 4) {
            a = a + 700;
        }
        if (y >= 5) {
            a = a + 500;
        }
        i.id = "v" + y;
        document.getElementById("gameBg").appendChild(i);
    }
}
var fw = 0;
function flameMove() {
    for (var y = 0; y < 100; y++) {

        var z = getComputedStyle(document.getElementById("v" + y));

        var p = parseInt(z.marginLeft) - 10;

        document.getElementById("v" + y).style.marginLeft = p + "px"


        if (p >= 220 & p <= 240){
            // alert("malaa")
            // alert(p);
            // alert(mt)
            // 240
            if (mt > 390){
                dw = setInterval(dead, 100)

                clearInterval(fw);
                clearInterval(bw);
                clearInterval(jw);
                clearInterval(rw);
                clearInterval(sw);
                jw = -1;

                rs.pause();
                ds.play();
            //     clearInterval(sw);
                
            //     setInterval(dead,100);
                
            }
        }
    }
}

// -----------------------dead------------------------------------
// ---------------------------------------------------------------
var d = 0
var dw = 0
function dead(){
    if(p_gender == "male"){
        var dead_img = document.getElementById("caracter");

        d = d + 1;

        if(d <= 15){
            d = 15;

            dead_img.style.marginTop = "420px";

            document.getElementById("score_merter").style.display = "block";

            document.getElementById("endScore").innerHTML = u;

            if (u => 10){
                document.getElementById("s_s_1").style.opacity = "100%"
                document.getElementById("xp").innerHTML = "normaly"
                bs.play();
            }
            if (u > 20){
                document.getElementById("s_s_1").style.opacity = "100%"
                document.getElementById("s_s_2").style.opacity = "100%"
                document.getElementById("xp").innerHTML = "nice"
                bs.play();
            }
            if (u > 40){
                document.getElementById("s_s_1").style.opacity = "100%"
                document.getElementById("s_s_2").style.opacity = "100%"
                document.getElementById("s_s_3").style.opacity = "100%"
                document.getElementById("xp").innerHTML = "wow"
                bs.play();
            }
            if (u > 60){
                document.getElementById("s_s_1").style.opacity = "100%"
                document.getElementById("s_s_2").style.opacity = "100%"
                document.getElementById("s_s_3").style.opacity = "100%"
                document.getElementById("s_s_4").style.opacity = "100%"
                document.getElementById("xp").innerHTML = "supper"
                bs.play();
            }
            if (u > 80){
                document.getElementById("s_s_1").style.opacity = "100%"
                document.getElementById("s_s_2").style.opacity = "100%"
                document.getElementById("s_s_3").style.opacity = "100%"
                document.getElementById("s_s_4").style.opacity = "100%"
                document.getElementById("s_s_5").style.opacity = "100%"
                document.getElementById("xp").innerHTML = "best"
                bs.play();
            }
            
        
        }
        dead_img.src = "player1/Dead (" + d + ").png";
    }
}

// -----------------------score------------------------------------
// ---------------------------------------------------------------
var sw = 0;
var u = 0;
function your_score(){
    rs.pause();
    
    u = u + 1

    document.getElementById("your_marks").innerHTML = u;
    if (u == 100){
        

        dw = setInterval(dead, 100)


        clearInterval(fw);
        clearInterval(bw);
        clearInterval(jw);
        clearInterval(rw);
        clearInterval(sw);
        jw = -1;
        document.getElementById("score_merter").style.display = "block";

        document.getElementById("endScore").innerHTML = u;

        if (u => 10){
            document.getElementById("s_s_1").style.opacity = "100%"
            document.getElementById("xp").innerHTML = "YOU WIN!"
            bs.play();
        }
    }

}
// -----------------------------------------------------
// ------------------pouseResume------------------------

var r_p = 0;
function pouseResume(){
    // alert("owu owu wada thami")

    if (r_p == 0){
        document.getElementById("pouseBG").innerHTML.display = "block";
        r_p = 1;
    }
    if (r_p == 1){
        document.getElementById("pouseBG").innerHTML.display = "none";
        r_p = 0;
    }
}
