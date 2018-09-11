var defaultErrorSummaryHeading = 'There has been a problem';
var defaultErrorSummaryDescription = 'Amend the following to continue';
var defaultTextFieldErrorMessage = 'Cannot be empty';
var defaultSelectorErrorSummaryErrorMessage = 'Select an option to continue';
var defaultSelectorErrorMessage = 'Select an option to continue';

// Show errors on page
function showErrors() {
  fixPageTitle();
  $('fieldset').closest('.form-group').addClass('form-group-error');
  $('.error-summary').css('display', 'block').focus();
//   $('.form-control').addClass('form-control-error');
  $('.error-message').css('display', 'block');
  $('legend').attr('id', 'error-link');
  $('body').scrollTop(0);
}

// Set radio focus from errory summary link click
$(function() {
  $('ul.error-summary-list li a').click(function(e) {
      e.preventDefault();
      $('.multiple-choice').find('input[type=radio], input[type=checkbox]').filter(':first').focus();
  });
});

// Stops duplicate errors appearing in page title
function fixPageTitle() {
  var title = $(document).prop('title');
  var error = title.includes("Error");

  if (error) {
    // do nothing
  } else {
    $(document).prop('title', 'Error: ' + title);
  }

//   var title = $(document).prop('title');
//   if (title.indexOf('Error') > -1) {
//   } else {
//       $(document).prop('title', 'Error: ' + title);
//   }
}

// Hide errors on page
function hideErrors() {
  $('.error-summary').hide();
  $('fieldset').closest('.form-group').removeClass('form-group-error');
  $('.form-control').removeClass('form-control-error');
  $('.error-message').hide();
  $('.error-message.prog2').hide();
  $('.error-message.input').hide();
  $('.error-message.input2').hide();
  $('body').scrollTop(0);
  // $('legend').removeAttr('id', 'error-link');
}
