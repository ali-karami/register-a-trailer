/* global $ */
/* global GOVUK */

// Warn about using the kit in production
// if (window.console && window.console.info) {
//   window.console.info('GOV.UK Prototype Kit - do not use for production')
// }

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

// Allow continue from enter press
$(function () {
  $('#content').keyup(function (event) {
    if (event.keyCode == 13) {
      $('.button').click();
    }
  });
});

// Shorthand URL
function go(url) {
  window.location.href = url;
}

// Create random registration type
// function randomRegistrationType() {
//   var array = ['registered', 'unregistered'];
//   var type = array[Math.floor(Math.random() * array.length)];
//   return type;
//   // console.log(type);
// }

// Set current trailer variable for shorter code
try {
  var currentTrailer = member.trailers[member.currentTrailerPosition];
} catch(err){}

var firstRegFee = 26;
var acquireFee = 21;
var duplicateCertFee = 10;
var enpac = 'electronic number plate authorisation certificate';

// Create random registration number
function randomReg() {
  var reg = '';
  var possible = "0123456789";
  for (var i = 0; i < 7; i++) reg += possible.charAt(Math.floor(Math.random() * possible.length));
  return 'A' + reg;
}

// Create random vin number
function randomVin() {
  var vin = '';
  var possibleNumber = "0123456789";
  var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 1; i++) vin += possibleNumber.charAt(Math.floor(Math.random() * possibleNumber.length));
  for (var i = 0; i < 2; i++) vin += possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
  for (var i = 0; i < 2; i++) vin += possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
  for (var i = 0; i < 1; i++) vin += possibleNumber.charAt(Math.floor(Math.random() * possibleNumber.length));
  for (var i = 0; i < 2; i++) vin += possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
  for (var i = 0; i < 3; i++) vin += possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
  for (var i = 0; i < 6; i++) vin += possibleNumber.charAt(Math.floor(Math.random() * possibleNumber.length));
  return vin;
}

// Get random manufacturer
function randomManufacturer() {
  var manu = ['A.R.B', 'A1 International', 'Abel', 'Adcliffe', 'Adcliffe Drawdeal Ltd', 'AHP', 'Andover', 'Andover Trailers Ltd', 'Arthur Hingley Trailers',
    'Artic Falkirk', 'Avalux Ltd', 'Bale Fabrications', 'Bartoletti', 'Belle Coachworks Ltd', 'Benalu', 'Berdex', 'Berger Fahrzeugtechnik Ges.m.b.H.',
    'BMI Trailers', 'Boughton International', 'Britcom International', 'Brookland Speed', 'Brookland Engineering', 'Broshuis', 'Burg', 'Caldal',
    'S. Cartwright & Sons (Coachbuilders) Ltd', 'Chassis Development Services Ltd', 'Chereau', 'Chieftain', 'Jean Chéreau SAS', 'Chieftain Trailers Ltd',
    'Cisternas COBO UK Ltd', 'Clayden', 'Clayton Commercials', 'COBO HNOS', 'Concept Trailers', 'Corus', 'Couldwell', 'County Trucking', 'CPS Mechanisation',
    'Crossland', 'Crossland Tankers Ltd', 'D-TeC Products B.V.', 'Delta/VSS Kocise', 'Dennis', 'Dennison Trailers Ltd', 'Don-Bur (Bodies & Trailers) Ltd',
    'Dyson', 'Estepe SpeciaL Truck Products B.V.', 'Feber Intercar', 'Faymonville AG', 'Feldbinder UK Ltd', 'Feldbinder Spezialfahrzeugwerke', 'F G M s.r.l.',
    'Fliegl Fahrzeugbau GmbH', 'Fruehauf', 'Frutiger CZ s.r.o.', 'GOFA-Gocher Fahrzeugbau GmbH', 'Goldhofer', 'Granalu Transformations SL', 'Gray & Adams Ltd',
    'GRW', 'Gurlesenyil Treyler', 'Hammar Maskin AB', 'Houghton Parkhouse Ltd', 'Hunwick Engineering Ltd', 'JPM Trailers Ltd', 'Kässbohrer Fahrzeugwerke GmbH',
    'Kel-Berg Trailers & Trucks Ltd', 'King Trailers Ltd', 'Knapen Trailers B.V.', 'Kögel Trailer GmbH & Co. KG', 'Kraker Trailers', 'Fahrzeugwerk Bernard Krone GmbH',
    'LAG Trailers NV', 'Lakeland Tankers Ltd', 'Langendorf GmbH', 'Lawrence David Ltd', 'Leci Trailers', 'Legras Industries', 'Lintrailers B.V.', 'Lohr',
    'M & G Trailers', 'M1 Engineering Ltd', 'SMFF Magyar', 'Maisonneuve S.A.S', 'McCauley Trailers Ltd', 'Mega Sp. Z o.o.', 'Micra Truck Bodies Ltd',
    'Montracon Ltd', 'Muldoon Transport Systems Ltd', 'NC Engineering', 'NC Sludge', 'NCS Trailers', 'Nooteboom Trailers B.V.', 'Oldbury', 'OMEPS s.r.l',
    'Overlander', 'Pacton Trailers B.V.', 'Paneltex Martrans', 'Panema Trailers (Eng) Ltd', 'Parcisa, S.L.U.', 'Pezzaioli', 'Carrozzeria Pezzaioli s.r.l.',
    'Piacenza', 'Plowman Brothers Ltd', 'Polski', 'Priden Engineering Ltd', 'Quiacrix (Parcisa) SLU', 'Raven', 'Ray Goudy', 'Ray Smith', 'Reload Systems',
    'Renders', 'R M Trailers', 'Road Tankers Northern Ltd', 'Robinson', 'Robinson Distribution', 'Rojo', 'Rolfo', 'Rothdean', 'Royen', 'RTS Trailmaster',
    'Sayers Road Tankers', 'Schmitz', 'SDC Trailers Ltd', 'Solomon Commercials Ltd', 'Sommer GmbH', 'Spitzer', 'STAS', 'Stokota', 'Talson Trailers B.V.',
    'TCL', 'Terex', 'Tirsan', 'Titan', 'Tiger Trailers Ltd', 'Trail-Fab', 'Trailor', 'Transport Engineering', 'Transporter Enterprises', 'Trent', 'Triffitt',
    'Truckmate', 'TTS', 'Turbos Hoet', 'Turner', 'Unique', 'United', 'Utility', 'Vallelly', 'Van der Peet', 'Van Hool', 'Vipex', 'Vlastuin Rolling Equipment B.V.',
    'Ward Fabrications', 'Weightlifter Bodies Ltd', 'Weightmaster', 'Welgro', 'Whale Tankers Ltd', 'Wheelbase', 'Wielton S.A.', 'Wilcox', 'Wilcox Commercial Vehicles Ltd',
    'Wilson', 'Woolf Eng', 'Wraith', 'York', 'ZVVZ Machinery']
  var rand = manu[Math.floor(Math.random() * manu.length)];
  return rand;
}

// Create random weights
function randomWeight(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Create random reference number
function randomReference() {
  var ref = '';
  var possible = "0123456789";
  for (var i = 0; i < 8; i++) ref += possible.charAt(Math.floor(Math.random() * possible.length));
  return 'DVLA' + ref;
}

// Check if any trailers exist
var pendingTrailers = 0;
function getPendingTrailers() {
  try {
    for (i = 0; i < member.trailers.length; i++) {
      if (member.trailers[i].registered == false) {
        pendingTrailers ++;
      } else {
        pendingTrailers = pendingTrailers;
      }
    }
    // console.log(pendingTrailers + ' pending trailers');
  } catch(err){
    console.log('No pending trailers exist');
  }
}
var registeredTrailers = 0;
function getRegisteredTrailers() {
  try {
    for (i = 0; i < member.trailers.length; i++) {
      if (member.trailers[i].registered == true) {
        registeredTrailers ++;
      } else {
        registeredTrailers = registeredTrailers;
      }
    }
    // console.log(registeredTrailers + ' registered trailers');
  } catch(err){
    console.log('No registered trailers exist');
  }
}

// Check registered/unregistered trailer amount
var registeredTrailersAmount = 0;
function getRegisteredTrailersAmount() {
    try {
        for (i = member.trailers.length - 1; i >= 0; i--) {
            if ((member.trailers[i].registered == false) && (member.trailers[i].registrationType == 'registered')) {
                registeredTrailersAmount++;
            } else {
                registeredTrailersAmount = registeredTrailersAmount;
            }
        }
        // console.log(pendingTrailers + ' pending trailers');
    } catch (err) {
        console.log('No pending trailers exist');
    }
}
var unregisteredTrailersAmount = 0;
function getUnregisteredTrailersAmount() {
    try {
        for (i = member.trailers.length - 1; i >= 0; i--) {
            if ((member.trailers[i].registered == false) && (member.trailers[i].registrationType == 'unregistered')) {
                unregisteredTrailersAmount++;
            } else {
                unregisteredTrailersAmount = unregisteredTrailersAmount;
            }
        }
        // console.log(pendingTrailers + ' pending trailers');
    } catch (err) {
        console.log('No pending trailers exist');
    }
}

// function addCommas(commaValue) {
//   var commaValue;
//   document.body.innerHTML = commaValue.toLocaleString();
// }

// Referrer
function getRefUrl() {
  var refUrl = document.referrer.substring(document.referrer.lastIndexOf('/') + 1).split("?")[0];
  // console.log('url = ' + refUrl);
  return(refUrl);
}

$(document).ready(function () {
  // Plural for trailerS
  if (registeredTrailers === 1) {
    $('.plural').html('');
  } else if ((registeredTrailers === 0) || (registeredTrailers > 1)) {
    $('.plural').html('s');
  }

  // Account type
  try {
    if (member.user.type == "company") {
      $('#record-type').show();
    } else if (member.user.type == "personal") {
      $('#record-type').hide();
    }
  } catch(err){}

  // Logged status
  try {
    if (!member.user) {
      $('.logged-user').hide();
      $('.grid-row.phase .phase-banner').css({'float':'none','width':'100%'});
      $('.logged-user').css('display', 'none');
    }
    $('#logged-user-name').html(member.user.name).css('text-transform', 'capitalize');

    $('a.log-out').click(function(e) {
      // e.preventDefault();
      member.clear();
      go('/');
    });
  } catch(err){}

  // Add space for new style errors
  if ($('main#content').find('.grid-row').hasClass('no-question')) {
    // console.log('.no-question FOUND');
  } else {
    // console.log('.no-question not found');
    $('main#content').find('.grid-row').addClass('question');
  }
});

// Delete disposal on link click
function deleteDisposal() {
  delete member.disposal;
}
