/**
 * Handle some of the Home section functions
 */

$(function () {
    'use strict';

    // Ask for Estimation button
    // $('#askForRdv').click(function () {

    //     // set the contact subject
    //     $('#subject').val('Sujet : Demande de RDV');

    //     // set the beginning of the message
    //     $('#message').val('Message : Je souhaite avoir un rendez-vous pour...');
    // });

});

function onSubmit(_token) {
    document.getElementById('contact-submit-button').click();
}

window.onload = function() {
    $('#infoCovid').modal('show');
};

