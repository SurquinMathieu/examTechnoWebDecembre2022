let Traveler = require('../models/travelerModel');
let Reservation = require('../models/reservationModel');
let mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'voyage',
});

let travelers = [];
let reservationInfos =[];

exports.showReservation = function(request,response){
    response.render('home.ejs')
}


exports.showRegisterTraveler = function(request,response){
    let nb_places = request.body.nbseat
    let destination = request.body.destination
    reservationInfos.push(new Reservation(destination,nb_places))

    response.render('person.ejs',{nb_places:nb_places});
}

exports.showFinalReservation = function(request,response){
    let noms = request.body.name
    let ages= request.body.age

    travelers=[]
    let index = 0
    while (index < noms.length )
    {
        let traveler = new Traveler(noms[index],ages[index]);
        travelers.push(traveler);
        index++
    }
    response.render('validation.ejs',{travelers:travelers,reservationInfos:reservationInfos})
}

exports.confirmation = function(request,respone){

    travelers.forEach(element =>{
        let info_traveler = {'nom':element.name, 'age':element.age}

        connection.query('insert INTO voyageur SET ?',info_traveler,function(error,result){
            if (error){
                console.log(error)
            }
        })
    })


    
}

//response.send('Merci ' + request.session.user + ', votre inscription a bien été enregistrée')

