//6 kleuren
var z = ["orange", "blue", "yellow", "green", "purple", "black"];

//lege array om kleurcode in te stoppen velden
var input = [];
//lege array plaatsen van de kleuren velden
var inputcolor = []; 

var teller = 0;

//radom kleur in de vakken programmeren
var field = document.getElementById("first").childNodes;

//kleuren
var orange 	= document.getElementById("orange");
var blue 	= document.getElementById("blue");
var yellow 	= document.getElementById("yellow");
var green 	= document.getElementById("green");
var purple 	= document.getElementById("purple");
var black 	= document.getElementById("black");

orange.style.display = "none";
blue.style.display = "none";
yellow.style.display = "none";
green.style.display = "none";
purple.style.display = "none";
black.style.display = "none";

var code1 = document.getElementById("code1");
var code2 = document.getElementById("code2");
var code3 = document.getElementById("code3");
var code4 = document.getElementById("code4");

code1.style.visibility = "hidden";
code2.style.visibility = "hidden";
code3.style.visibility = "hidden";
code4.style.visibility = "hidden";

//willekeurige kleuren uit array z halen en in de console log tonen.
input[0] = z [Math.floor((Math.random() * 6 ))] ;
input[1] = z [Math.floor((Math.random() * 6 ))] ;
input[2] = z [Math.floor((Math.random() * 6 ))] ;
input[3] = z [Math.floor((Math.random() * 6 ))] ;

console.log(input)

//start het spel
function newgame() {
	//make the colors visible
	orange.style.display = "block";
	blue.style.display = "block";
	yellow.style.display = "block";
	green.style.display = "block";
	purple.style.display = "block";
	black.style.display = "block";

    //dit zijn de velden waar de kleuren in komen te staan
    field[1].style.backgroundColor = input[0];
    field[3].style.backgroundColor = input[1];
    field[5].style.backgroundColor = input[2];
    field[7].style.backgroundColor = input[3];

  }

// controle van de kleuren en rand groen of rood kleuren
//volgende opdracht is nieuwe fuctie aanmaken bij elke poging gaan vergelijken of de kleuren gelijk staan met elkaar
function checkinput(kleur,kleurinvoer) {
	if (kleur == kleurinvoer) {
		document.getElementById('invoer'+teller).style.border = "2px solid green";
		completecode();
	}else if (input.indexOf(kleurinvoer)>-1) {
		document.getElementById('invoer'+teller).style.border = "2px solid red";
	}
}

function setcolor(color,setid){
	//velden plaatsen met eigen id
	var id_row1 = document.getElementById('row1');
	var fldset  = document.createElement("fieldset");
	var colorchoise=document.getElementById(setid);
	inputcolor[teller]=color;
	console.log(inputcolor);

	//maximaal maar 48 velden plaatsen om de 12 pogingen te halen
	if (teller < 48) {
		fldset.setAttribute("id","invoer"+teller+"");
		id_row1.appendChild(fldset);
		fldset.setAttribute("style", "background-color:"+color+"");
	}

	//vergelijken met de kleurcode bij elk poging
	if (teller < 4) {
		//alert("let's check your first code");
		checkinput(input[teller],inputcolor[teller]);
	}
	else if (teller > 3 && teller < 8){
		//alert("dit was de tweede poging")
		checkinput(input[teller-4],inputcolor[teller]);
	}
	else if (teller > 7 && teller < 12){
		checkinput(input[teller-8],inputcolor[teller]);
	}
	else if (teller > 11 && teller < 16){
		checkinput(input[teller-12],inputcolor[teller]);	
	}
	else if (teller > 15 && teller < 20){
		checkinput(input[teller-16],inputcolor[teller]);
	}
	else if (teller > 19 && teller < 24){
		checkinput(input[teller-20],inputcolor[teller]);
	}
	else if (teller > 23 && teller < 28){
		checkinput(input[teller-24],inputcolor[teller]);
	}
	else if (teller > 27 && teller < 32){
		checkinput(input[teller-28],inputcolor[teller]);
	}
	else if (teller > 31 && teller < 36){
		checkinput(input[teller-32],inputcolor[teller]);
	}
	else if (teller > 35 && teller < 40){
		checkinput(input[teller-36],inputcolor[teller]);
	}
	else if (teller > 39 && teller < 44){
		checkinput(input[teller-40],inputcolor[teller]);
	}
	else if (teller > 43 && teller < 48){
		checkinput(input[teller-44],inputcolor[teller]);
	}

	teller = teller +1; 

	if (teller == 49) {
		alert("Game Over, Druk F5 voor een nieuw spel"); 

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";

		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";
	}
}

function completecode(){
	//eerste poging
	if (input[0] == inputcolor[0] &&
		input[1] == inputcolor[1] &&
		input[2] == inputcolor[2] &&
		input[3] == inputcolor[3]) {

		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";

	} else if (
		//tweede poging
		input[0] == inputcolor[4] &&
		input[1] == inputcolor[5] &&
		input[2] == inputcolor[6] &&
		input[3] == inputcolor[7]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//derde poging
		input[0] == inputcolor[8] &&
		input[1] == inputcolor[9] &&
		input[2] == inputcolor[10] &&
		input[3] == inputcolor[11]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//vierde poging
		input[0] == inputcolor[12] &&
		input[1] == inputcolor[13] &&
		input[2] == inputcolor[14] &&
		input[3] == inputcolor[15]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//vijfde poging
		input[0] == inputcolor[16] &&
		input[1] == inputcolor[17] &&
		input[2] == inputcolor[18] &&
		input[3] == inputcolor[19]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//zesde poging
		input[0] == inputcolor[20] &&
		input[1] == inputcolor[21] &&
		input[2] == inputcolor[22] &&
		input[3] == inputcolor[23]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//zevende poging
		input[0] == inputcolor[24] &&
		input[1] == inputcolor[25] &&
		input[2] == inputcolor[26] &&
		input[3] == inputcolor[27]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//achtste poging
		input[0] == inputcolor[28] &&
		input[1] == inputcolor[29] &&
		input[2] == inputcolor[30] &&
		input[3] == inputcolor[31]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//negende poging
		input[0] == inputcolor[32] &&
		input[1] == inputcolor[33] &&
		input[2] == inputcolor[34] &&
		input[3] == inputcolor[35]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//tiende poging
		input[0] == inputcolor[36] &&
		input[1] == inputcolor[37] &&
		input[2] == inputcolor[38] &&
		input[3] == inputcolor[39]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//elfde poging
		input[0] == inputcolor[40] &&
		input[1] == inputcolor[41] &&
		input[2] == inputcolor[42] &&
		input[3] == inputcolor[43]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		//twaalfde poging
		input[0] == inputcolor[44] &&
		input[1] == inputcolor[45] &&
		input[2] == inputcolor[46] &&
		input[3] == inputcolor[47]) {
		
		alert("Game complete");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	}
}
