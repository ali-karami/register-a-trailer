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

// Set current trailer variable for shorter code
try {
  var currentTrailer = member.trailers[member.currentTrailerPosition];
} catch(err){}

var trailerCost = 55;
var certificateCost = 20;
var enpac = 'electronic number plate authorisation certificate (eV948)';

// Create random vin number
function randomVin() {
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

// Create random registration number
function randomReg() {
  var possible = "0123456789";
  for (var i = 0; i < 7; i++) reg += possible.charAt(Math.floor(Math.random() * possible.length));
  return 'A' + reg;
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
  $('main#content').find('.grid-row').addClass('question');
});
