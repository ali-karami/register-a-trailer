// Validation
// ==========================================================================

// Config
// var defaultErrorSummaryHeading = 'There has been a problem';
var defaultErrorSummaryHeading = 'There’s a problem with the information you have provided';
// var defaultErrorSummaryDescription = 'Amend the following to continue';
var defaultErrorSummaryDescription = 'Amend the following details to continue';
var defaultErrorMessage = 'Select an option to continue';

// $(document).on('submit', 'form', function (e) {
function checkErrors() {
    var requiredFieldsPresent = $(document).find('[data-required]').length > 0;

    removeErrors();

    if (requiredFieldsPresent) {
        var errors = [];

        checkTextFields(errors);
        checkSelectors(errors);

        if (errors.length > 0) {
            // e.preventDefault();
            creatErrorSummary();
            createErrorMessages(errors);
            $(document).scrollTop(0);
        }
        // else {
        //     next();
        // }
    }
// });
}

function removeErrors() {
    $('.error-summary').remove();

    $('.error-message').each(function () {
        $(this).remove();
    });

    $('.form-control-error').each(function () {
        $(this).removeClass('form-control-error');
    });

    $('.form-group-error').each(function() {
        $(this).removeClass('form-group-error');
    });
}

function creatErrorSummary() {
    var summaryNotPresent = $(document).find('.error-summary').length === 0;
    var summary = '<div class="error-summary" role="group" aria-labelledby="error-summary-heading" tabindex="-1">' +
        '<h1 class="heading-medium error-summary-heading" id="error-summary-heading">' + defaultErrorSummaryHeading + '</h1>' +
        '<p>' + defaultErrorSummaryDescription + '</p>' +
        '<ul class="error-summary-list">' +
        '</ul>' +
        '</div>';

    if (summaryNotPresent) {
        $('.form-group').first().before(summary);
    }
}

function createErrorMessages(errors) {
    for (var i = 0; i < errors.length; i++) {
        if ($(document).find('a[href="#' + errors[i].id + '"]').length === 0) {
            $('.error-summary-list').append(
                '<li><a href="#' + errors[i].id + '">' + errors[i].label + ' - ' + errors[i].errorMessage + '</a></li>'
            );

            var $formgroup = $(document).find('#' + errors[i].id).parents('.form-group');

            $formgroup.addClass('form-group-error');

            if ($formgroup.find('.error-message').length === 0) {
                if ($formgroup.find('input[type="text"], input[type="password"]').length > 0 || $formgroup.find('textarea').length > 0) {
                    if ($formgroup.find('.form-date').length > 0) {
                        $formgroup.find('.form-date').before(
                            '<span class="error-message">' + errors[i].errorMessage + '</span>'
                        );
                    } else {
                        $formgroup.find('legend').after().append(
                            '<span class="error-message">' + errors[i].errorMessage + '</span>'
                        );

                        $formgroup.find('.form-control').addClass('form-control-error');
                    }
                } else if ($formgroup.find('input[type="radio"]').length > 0 || $formgroup.find('input[type="checkbox"]')) {
                    $formgroup.find('legend').after().append(
                        '<span class="error-message">' + errors[i].errorMessage + '</span>'
                    );
                }
            }
        }
    }
}

function checkTextFields(errors) {
    $(document).find('input[type="text"],input[type="password"], textarea').each(function () {
        var $formgroup = $(this).parents('fieldset');
        // var label = $(this).parent().find('error-start').clone().children().remove().end().text();
        var defaultLabel = $(this).parent().find('error-start').clone().children().remove().end().text();

        if ($formgroup.attr('data-required') !== undefined && $(this).val() === '' && !$(this).parent().hasClass('js-hidden')) {
            if ($(this).attr('id') === undefined) {
                $(this).attr('id', $(this).attr('name'));
            }

            errors.push(
                {
                    id: $(this).attr('id'),
                    name: $(this).attr('name'),
                    errorMessage: $formgroup.attr('data-error') || defaultErrorMessage,
                    // label: label,
                    label: $formgroup.attr('data-start') || defaultLabel,
                    type: 'text, password'
                }
            );
        }
    });
    return;
}

function checkSelectors(errors) {
    var checked = [];

    $(document).find('input[type="radio"], input[type="checkbox"]').each(function () {
        var $fieldset = $(this).parents('fieldset');
        // var label = $fieldset.find('legend h1').clone().children().remove().end().text();
        var defaultLabel = $fieldset.find('legend h1').clone().children().remove().end().text();

        if ($fieldset.attr('data-required') !== undefined && $fieldset.find(':checked').length === 0) {
            if ($(this).attr('id') === undefined) {
                $(this).attr('id', $(this).attr('name'));
            }

            if (checked.indexOf($(this).attr('name')) < 0) {
                checked.push($(this).attr('name'));
                errors.push(
                    {
                        id: $(this).attr('id'),
                        name: $(this).attr('name'),
                        errorMessage: $fieldset.attr('data-error') || defaultErrorMessage,
                        // label: label,
                        label: $fieldset.attr('data-start') || defaultLabel,
                        type: 'text, password'
                    }
                );
            }
        }
    });
}