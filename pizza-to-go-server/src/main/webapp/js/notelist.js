"using strict";

window.onload = function () {

	warenkorb();
	petTemplate(pizza);
	summe();


	// fetch('pizza.json').then(response => {
	// 	return response.json();
	//   }).then(data => {

	// 	console.log(data);
	//   }).catch((error) => console.error(error));



	var input = document.querySelector("#pwd");
	input.addEventListener("keyup",
		function () {
			var passwd = input.value;
			checkPassword(passwd);
		},
		false);

}


function showRegistration() {
	document.querySelector("#registration").style.display = "block";
	document.querySelector("#anmeldung").style.display = "none";
	document.querySelector("#app").style.display = "none";
	document.querySelector("#showinfo").style.display = "none";

	// document.getElementById("registration").style.display = "block";
}

function hideAnmeldung() {
	document.querySelector("#anmeldung").style.display = "none";
	document.querySelector("#app").style.display = "block";
	// document.getElementById("registration").style.display = "none";
}

function showAnmeldung() {
	document.querySelector("#anmeldung").style.display = "block";
	document.querySelector("#registration").style.display = "none";
	document.querySelector("#app").style.display = "none";

	document.querySelector("#showinfo").style.display = "none";

	// document.getElementById("registration").style.display = "block";
}

function hideRegistration() {
	document.querySelector("#registration").style.display = "none";
	document.querySelector("#app").style.display = "block";
	// document.getElementById("registration").style.display = "none";
}


// Vorname prüfen
var nameOk = false;
var straßeOk = false;
var emailOk = false;
var straßeNrOk = false;
var plzOk = false;
var userOk = false;
var passwdOk = false;




function checkIfAllOk() {
	let allOk = nameOk && emailOk && straßeOk && straßeNrOk && plzOk && userOk && passwdOk;
	if (allOk) {
		document.querySelector("#btn").disabled = false;
	}
	else {
		document.querySelector("#btn").disabled = true;
	}
}


// Password 



function checkPassword(passwd) {

	var len = passwd.length;
	var regExHasNumber = /\d/;
	var regExHasUpperCase = /[A-Z]/;
	var regExHasLowerCase = /[a-z]/;
	var regExHasSpecialSign = /[!?§$%&#*+-.]/;
	var hasNumber = regExHasNumber.test(passwd);
	var hasUpperCase = regExHasUpperCase.test(passwd);
	var hasLowerCase = regExHasLowerCase.test(passwd);
	var hasSpecialSign = regExHasSpecialSign.test(passwd);
	var size = 0;
	if (len >= 5) {
		passwdOk = true;
		size += 5;
		if (hasNumber) size += 5;
		if (hasUpperCase) size += 10;
		if (hasLowerCase) size += 5;
		if (hasSpecialSign) size += 10;

		if (len >= 7 && hasNumber && hasUpperCase && hasLowerCase && hasSpecialSign) size += 20;
	}
	else passwdOk = false;
	var c = document.querySelector("#pwdCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, 155, 20);
	var grd = ctx.createLinearGradient(0, 0, size * 10, 0);
	grd.addColorStop(0, "green");
	grd.addColorStop(1, "red");
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, 155, 20);

	checkIfAllOk();

}	// ende Password


// Straße

function checkStraßeOnFocus() {
	document.querySelector("#errorStraße").innerHTML = "";
}

function checkStraßeOnBlur() {
	if (document.querySelector("#street").value.length == 0)
		return;

	if (straßeOk == false) {
		document.querySelector("#errorStraße").innerHTML = "Format des Straßes ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkStraße() {
	let nameInput = document.querySelector("#street").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[a-zäöüßA-ZÄÖÜ]{4,}$/;
	if (nameRegEx.test(nameInput) == false) {
		straßeOk = false;
	}
	else {
		straßeOk = true;
	}
	checkIfAllOk();
}

// ende Straße

// StraßeNr

function checkStraßeNrOnFocus() {
	document.querySelector("#errorStraßeNr").innerHTML = "";
}

function checkStraßeNrOnBlur() {
	if (document.querySelector("#streetNr").value.length == 0)
		return;

	if (straßeNrOk == false) {
		document.querySelector("#errorStraßeNr").innerHTML = "Format des StraßeNr ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkStraßeNr() {
	let nameInput = document.querySelector("#streetNr").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[1-9]{1,}$/;
	if (nameRegEx.test(nameInput) == false) {
		straßeNrOk = false;
	}
	else {
		straßeNrOk = true;
	}
	checkIfAllOk();
}

// ende StraßeNr

function checkVornameOnFocus() {
	document.querySelector("#errorVorname").innerHTML = "";
}

function checkVornameOnBlur() {
	if (document.querySelector("#vrn").value.length == 0)
		return;

	if (nameOk == false) {
		document.querySelector("#errorVorname").innerHTML = "Format des Vornamens ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkVorname() {
	let nameInput = document.querySelector("#vrn").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[A-ZÄÖÜ][a-zäöüßA-ZÄÖÜ]*[a-zäöüß]$/;
	if (nameRegEx.test(nameInput) == false) {
		nameOk = false;
	}
	else {
		nameOk = true;
	}
	checkIfAllOk();
}

// nachname


function checkNachnameOnFocus() {
	document.querySelector("#errorNachname").innerHTML = "";
}

function checkNachnameOnBlur() {
	if (document.querySelector("#nhn").value.length == 0)
		return;

	if (nameOk == false) {
		document.querySelector("#errorNachname").innerHTML = "Format des Nachnamens ist falsch";
	}
}

function checkNachname() {
	let nameInput = document.querySelector("#nhn").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[A-ZÄÖÜ][a-zäöüßA-ZÄÖÜ]*[a-zäöüß]$/;
	if (nameRegEx.test(nameInput) == false) {
		nameOk = false;
	}
	else {
		nameOk = true;
	}
	checkIfAllOk();
}


// Email

function checkEmailOnFocus() {
	document.querySelector("#errorEmail").innerHTML = "";
}

function checkEmailOnBlur() {
	if (document.querySelector("#email").value.length == 0)
		return;

	if (emailOk == false) {
		document.querySelector("#errorEmail").innerHTML = "Format der E-Mail-Adresse ist falsch";
	}
}

function checkEmail() {
	emailOk = false;

	let emailInput = document.querySelector("#email").value;
	if (emailInput.length === 0)
		return;

	let emailRegEx = /^\w{4}\d{4,}@stud\.(hs-kl|fh-kl)\.de$/;
	if (emailRegEx.test(emailInput) == false) {
		emailOk = false;
	}
	else {
		emailOk = true;
	}

	checkIfAllOk();
}

// PZL


function getPlzFromEscher() {
	plzOk = false;

	let value = document.querySelector('#plz').value;
	if (value.length != 5) {

		let divElement = document.querySelector("#ort");
		while (divElement.firstChild) {
			divElement.removeChild(divElement.firstChild);
		}

	}
	if (value.length == 5) {



		let url = 'http://escher.informatik.hs-kl.de/PlzService/ort?plz=' + value;

		fetch(url)
			.then((response) => response.text())
			.then((data) => {


				data.trim().slice(0, -1).split(";").forEach(ort => {
					console.log(ort);
					let liElement = document.createElement("option");
					liElement.innerHTML = ort.slice(6);
					document.querySelector("#ort").append(liElement);
				});

				if (document.querySelector("#ort").value.length != 0) plzOk = true;
			})
			.catch((error) => console.error(error));



	}

	// if (document.querySelector('#plz').value.length == 5 &&  plzOk = true;

	checkIfAllOk();

}


function checkPlzOnFocus() {
	document.querySelector("#errorPlz").innerHTML = "";
}

function checkPlzOnBlur() {
	if (document.querySelector("#plz").value.length == 0)
		return;

	if (document.querySelector("#plz").value.length != 0 && document.querySelector("#ort").value.length == 0) {
		document.querySelector("#errorPlz").innerHTML = "Format der PLZ ist falsch";
		//  plzOk = false;		
	}

	// else plzOk = true;
}
// BenutzerName

function checkUserOnFocus() {
	document.querySelector("#errorUser").innerHTML = "";
}

function checkUserOnBlur() {
	if (document.querySelector("#user").value.length == 0)
		return;

	if (userOk == false) {
		document.querySelector("#errorUser").innerHTML = "Format des Benutzernames ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkUser() {
	let nameInput = document.querySelector("#user").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[a-zäöüßA-ZÄÖÜ][a-zäöüßA-ZÄÖÜ1-9]{4,}$/;
	if (nameRegEx.test(nameInput) == false) {
		userOk = false;
	}
	else {
		userOk = true;
	}
	checkIfAllOk();
}

// ende BenutzerName


const pizza = [
	{
		"id": 1,
		"imagePath": "https://static.essen-und-trinken.de/bilder/6b/3f/58617/facebook_image/klassischer-burger.jpg",
		"name": "Classic Burger",
		"description": "with beef, cheese, onion, tomato, with beef, cheese, onion, tomato, with beef, cheese, onion, tomato",
		"price": 5.5
	},
	{
		"id": 2,
		"imagePath": "https://img.delicious.com.au/0Hfc6oZG/w1200/del/2017/03/creamy-pumpkin-soup-43936-2.jpg",
		"name": "Pumpkin Soup",
		"description": "with pumpkins, Lorem ipsum dolor sit amet, consetetur sadipscing",
		"price": 0.75
	},
	{
		"id": 3,
		"imagePath": "https://cdn.gutekueche.de/upload/rezept/141/1600x1200_pommes-frites-aus-belgien.jpg",
		"name": "Pommes",
		"description": "with ketchup",
		"price": 3
	},
	{
		"id": 4,
		"imagePath": "https://cdn.gutekueche.de/upload/rezept/141/1600x1200_pommes-frites-aus-belgien.jpg",
		"name": "Pommes",
		"description": "with ketchup",
		"price": 3
	}
];



function petTemplate(pizza) {

	var pizzaList = "";
	pizza.forEach(com => {
		pizzaList += '<div class="animal"><img class="pet-photo" src="'
			+ com.imagePath + '"> <h2 class="pet-name">' + com.name + ' </h2>  <p id="description2"> '
			+ com.description + '</p>  <p><span id="price"><strong >Preis:  </strong>'
			+ com.price + ' €</span><span id="preis3"><a id="mehrInfo" onclick="showInfos('
			+ com.id + ')">Mehr Infos <i class="fas fa-info-circle"></i></a><button type="button" class="hinzufuegen" id="hinzufuegen" onclick="hinzufuegen('
			+ com.id + ')" ><i class="fas fa-cart-plus"></i></button>  </span> </p></div >';
	});
	document.querySelector("#app").innerHTML = pizzaList;

}

var array = [];
var w = 0;

function hinzufuegen(id) {
	w++;
	warenkorb();
	var a = 1;
	pizza.forEach(com => {

		if (id == com.id) {

			array.push({
				pizza_id: com.id,
				pizza_name: com.name,
				Pizza_image: com.imagePath,
				Pizza_preis: com.price,
				Pizza_summe : com.price*a,
				Pizza_description: com.description,
				Pizza_anzahl: a

			});

			summe();

		}
		document.querySelector("#warenkorb").innerHTML = showWarenkorb(array);


	});

}


function löschen(id) {

	w--;
	warenkorb();
	array.forEach(com => {

		if (id == com.pizza_id) { delete array[array.indexOf(com)]; summe(); }
	});
	console.log(array);

	document.querySelector("#warenkorb").innerHTML = showWarenkorb(array);;

}

function showInfos(id) {

	console.log(id);
	document.querySelector("#app").style.display = "none";

	pizza.forEach(com => {

		if (id == com.id) {
			document.querySelector("#showinfo").innerHTML =

				'<div class="mehrinfos"  style="margin : 15px"> <table><tr><td rowspan="2" id="td_img">'
				+ '<img class="photo" src="'
				+ com.imagePath + '"></td><td style="vertical-align: top;text-align: left; "><p class="name"> '
				+ com.name + '</p></td> </tr><tr><td style="vertical-align: top;text-align: left; padding-left:10px"><strong >Preis:  </strong> ' + com.price + ' €</td></tr><tr><td colspan="2"><p> '
				+ com.description + '</p></td></tr></table>'
				+ ' <span id="info_zurück"><a id="hideinfo" onclick="hideInfos()"><i class="fas fa-hand-point-left"></i> Zurück</a><button type="button" class="hinzufuegen" id="hinzufuegen" onclick="hinzufuegen('
				+ com.id + ')" ><i class="fas fa-cart-plus"></i></button>  </span></div >';

		}

	});


}

function showWarenkorb(array) {
	var warenkorb = "";
	array.forEach(com => {

		warenkorb += '<div class="showWarenkorb"> <h4 class="name">'
			+ com.pizza_name + ' </h4><h4 class="anzahl"> '
			+ '<button type="button" class="minus"onclick="minus(' + com.pizza_id + ')"><i class="fas fa-minus">'
			+ '</i></button> <input type="text" id="anzahl_input" style="width: 30px; height: 30px;"  disabled /> '
			+ '<button type="button" class="plus" onclick="plus(' + com.pizza_id + ')"><i class="fas fa-plus"></i></button><span id="preis">Preis '
			+ '</span></h4> <span id="preis3"><span id="preis2">' + com.Pizza_summe*com.Pizza_anzahl
			+ ' €</span> <button type="button" class="löschen" id="löschen" onclick="löschen('
			+ com.pizza_id + ')"><i class="far fa-trash-alt"></i></button></span></div >';
	});

	return warenkorb;
}



function hideInfos() {

	document.querySelector("#app").style.display = "block";
	document.querySelector("#showinfo").style.display = "none";

}

function warenkorb() {
	document.querySelector(".active").innerHTML = '<i class="fas fa-cart-plus"></i><sup id="sup">' + w + '</sup>';

}

function summe() {

	var s = 0;
	if (array.length == 0) s = 0;
	else {
		array.forEach(element => {

			s += (element.Pizza_summe);
		});

	}
	
	document.querySelector("#summe_preis").innerHTML = s + ' €';
}

function plus(id) {

	array.forEach(element => {

		if (id == element.pizza_id) {
			element.Pizza_anzahl++;
			element.Pizza_summe= element.Pizza_preis*element.Pizza_anzahl;
			console.log(element.Pizza_summe );
			document.querySelector("#preis2").value = element.Pizza_summe;
			document.querySelector("#anzahl_input").value = element.Pizza_anzahl;
			summe();
			showWarenkorb(array);
		}


	});


}
function minus(id) {

	array.forEach(element => {

		if (id == element.pizza_id) {
			if(element.Pizza_anzahl!=1){
				element.Pizza_anzahl--;
			element.Pizza_summe= element.Pizza_preis*element.Pizza_anzahl;
			console.log(element.Pizza_summe );
			
			document.querySelector("#preis2").innerHTML = element.Pizza_summe;
			document.querySelector("#anzahl_input").value = element.Pizza_anzahl;
			summe();
			showWarenkorb(array);


		}}


	});

	


}
