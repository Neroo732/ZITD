
// Requiring module
const express = require("express");
var path = require('path');


const app = express();

// Funkcja uwierzytalniająca, zawiera trzy argumenty, sprawdza czy żądanie zawiera nagłówek autoryzacyjny, 
function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	console.log(req.headers);
	// instrukcja warunkowa, sprawdza czy nagłówek nie istnieje, jak tak, wykonuje kod w bloku
	if (!authheader) {
		var err = new Error('You are not authenticated!'); //obiekt przypisany do zmiennej err
		res.setHeader('WWW-Authenticate', 'Basic'); // metoda ustawia nagłówek
		err.status = 401; // kod błędu 401
		return next(err)
	}
// podzielenie na tablice zakodowanego loginu i hasła, konwertuje na stringa, 
	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1]; // tablica z dwoma elementami, login i hasło
    // instrukcja warunkowa
	if (user == '' && pass == '') { //sprawdza czy zmienne mają ten sam typ i wartości
   
		// If Authorized user
		next();
	} else { // jezeli warunek nie jest spełniony, generowany jest błąd 401 
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
	console.log("Server is Running"); //informuje, że serwer został uruchomiony na porcie 3000
})
