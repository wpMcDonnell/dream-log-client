const store = require('./../store')

$('.create-post-div').hide()
$('#sign-out-button').hide()
// $('#dreams-index').hide()
$('.dreams-posts').hide()
$('#dream-destroy').hide()
$('#dream-get').hide()
$('#change-password').hide()
$('#sign-up').hide()
$('.create-post-button').hide()


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
  $('.create-post-div').show()
  $('#sign-out-button').show()
  $('.dreams-posts').show()
  $('#dream-destroy').show()
  $('#dream-get').show()
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-in').hide()
  $('#create-account').hide()
  setTimeout(() => {
    $('#user-message').html('')
  }, 5000)
  $('.create-post-button').show()
}

const signInFailure = function (response) {
  $('#user-message').text('Sign in failed, try again')
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function (response) {
  store.user = null
  $('#user-message').text('sign out successful')
  $('#sign-in').show()
  $('#create-account').show()
  $('.create-post-div').hide()
  $('#sign-out-button').hide()
  $('.dreams-posts').hide()
  $('#dream-destroy').hide()
  $('#dream-get').hide()
  $('#sign-up').trigger('reset')
  $('#dreams-display').html('')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('.create-post-button').hide()
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

const onCreateAccount = function () {
  $('#sign-in').hide()
  $('#sign-up').show()
  $('#create-account').hide()
  $('#user-message').html('')
  $('#sign-in').trigger('reset')
}

const onExitSignUp = function () {
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#create-account').show()
  $('#user-message').html('')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  onCreateAccount,
  onExitSignUp
}
