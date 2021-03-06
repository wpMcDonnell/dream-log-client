const store = require('./../store')

$('.create-post-div').hide()
$('#sign-out-button').hide()
// $('#dreams-index').hide()
$('.dreams-posts').hide()

const signUpSuccess = function (response) {
  $('#user-message').text('Sign Up Successful!!!')
}

const signUpFailure = function (response) {
  $('#user-message').text('Sign Up failed, please try again')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#user-message').text('Sign in successful')
  $('#auth-section').hide()
  $('.create-post-div').show()
  $('#sign-out-button').show()
  $('.dreams-posts').show()
}

const signInFailure = function (response) {
  $('#user-message').text('Sign in failed, try again')
}

const signOutSuccess = function (response) {
  store.user = null
  $('#user-message').text('sign out successful')
  $('#auth-section').show()
  $('.create-post-div').hide()
  $('#sign-out-button').hide()
  $('.dreams-posts').hide()
}

const signOutFailure = function (response) {
  $('#user-message').text('Sign out failed, try again')
}

const changePasswordSuccess = function () {
  $('#user-message').text('Password changed successfully')
}

const changePasswordFailure = function () {
  $('#user-message').text('Password changed failed')
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
