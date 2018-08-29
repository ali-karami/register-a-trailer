// Show errors on page

// var error_message_default = 'Select an option';
// var error_message_empty = 'Cannot be empty';
// var error_message_invalid = 'This is invalid';

// function showErrors(groupID, errorMessage) {
//   $(groupID).addClass('error');
//   $(errorMessage).show();
//   $('.error-summary').show();
//   $('body').scrollTop(0);
//   validInput = false;
// }

// function hideErrors() {
//   var validInput = '';
//   $('.error-message').hide();
//   $('.error-summary').hide();
//   $('.error').removeClass('error');
// }


function showErrors() {
  console.log('Errors shown');

  // For page title
  var title = $(document).prop('title');
  if (title.indexOf('Error') > -1) {
  } else {
      $(document).prop('title', 'Error: ' + title);
  }

  // All error types
  $('body').scrollTop(0);
  $('fieldset').closest('.form-group').addClass('form-group-error');
  $('.form-control').addClass('form-control-error');
  $('.error-message').css('display', 'block');
  // $('.error-message').html(error_message);
  $('.error-summary').show().focus();
  $('legend').attr('id', 'error-link');

  // For radios
  

  // var input = $('.parent1').find(".child3");
  // if(child3.length > 0) {
  //   // child3 is present
  // }

  
  // For inputs
  $('input').closest('.panel.panel-border-narrow').css({'border':'none','padding-left':'0'});

  $('main#content').find('.grid-row.question').removeClass('question')
}

// Reset errors on page
function resetErrors() {
  console.log('Errors reset')
  $('fieldset').closest('.form-group').removeClass('form-group-error');
  $('.form-control').removeClass('form-control-error');
  $('.error-message').hide();
  $('.error-summary').hide();
  $('legend').removeAttr('id');
  $('main#content').find('.grid-row').addClass('question');
}


// var error = false
// var error_blank = false
// var error_invalid = false
// var error_userID = false
// var error_password = false

// if (!userID) {
//   error = true
//   error_blank = true
//   error_userID = true
// }

// if (!password) {
//   error = true
//   error_password = true
//   error_blank = true
// } else if (password !== 'password') {
//   error = true
//   error_invalid = true
//   error_password = true
// }

// if (error_blank) {
//     error_invalid = false;
// }