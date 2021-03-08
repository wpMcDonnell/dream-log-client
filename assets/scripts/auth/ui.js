const store = require('./../store')

$('.create-post-div').hide()
$('#sign-out-button').hide()
// $('#dreams-index').hide()
$('.dreams-posts').hide()
$('#dream-destroy').hide()
$('#dream-get').hide()
$('#change-password').hide()

const signUpSuccess = function (response) {
  $('#user-message').text('Sign Up Successful!!!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const signUpFailure = function (response) {
  $('#user-message').text('Sign Up failed, please try again')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#user-message').text('Sign in successful')
  $('#auth-section').hide()
  $('.create-post-div').show()
  $('#sign-out-button').show()
  $('.dreams-posts').show()
  $('#dream-destroy').show()
  $('#dream-get').show()
  $('#sign-in').trigger('reset')
  $('#change-password').show()
}

const signInFailure = function (response) {
  $('#user-message').text('Sign in failed, try again')
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function (response) {
  store.user = null
  $('#user-message').text('sign out successful')
  $('#auth-section').show()
  $('.create-post-div').hide()
  $('#sign-out-button').hide()
  $('.dreams-posts').hide()
  $('#dream-destroy').hide()
  $('#dream-get').hide()
  $('#sign-up').trigger('reset')
  $('#dreams-display').html('')
  $('#change-password').trigger('reset')
}

const signOutFailure = function (response) {
  $('#user-message').text('Sign out failed, try again')
  $('#sign-up').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#user-message').text('Password changed successfully')
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')

}

const changePasswordFailure = function () {
  $('#user-message').text('Password changed failed')
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
