'use strict'

const authEvents = require('./auth/events')

const dreamEvents = require('./dream/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#sign-out').on('click', authEvents.onSignOut)

  $('#post-button').on('submit', dreamEvents.onCreate)

  $('#dreams-index').on('click', dreamEvents.onIndexDreams)
})
