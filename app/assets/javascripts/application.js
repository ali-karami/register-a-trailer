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

  // Details/summary polyfill from frontend toolkit
  GOVUK.details.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

// Allow continue from enter press
$(function() {
    $("#content").keyup(function(event) {
        if(event.keyCode == 13) {
            $(".button").click();
        }
    });
});

// Shorthand URL
function go(url) {
  window.location.href = url;
}

$(document).ready(function () {
  if (member.questions.serviceName === "manage") {
      $('#service-name').html('Manage a trailer');
  } else if (member.questions.serviceName === "register") {
      $('#service-name').html('Register a trailer');
  }
  console.log('Service type is ' + member.questions.serviceName)
})
