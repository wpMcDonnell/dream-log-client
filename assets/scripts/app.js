'use strict'

const authEvents = require('./auth/events')

const dreamEvents = require('./dream/events')

const authUi = require('./auth/ui')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#sign-out').on('click', authEvents.onSignOut)

  $('#create-post').on('submit', dreamEvents.onCreateDream)

  $('#dreams-index').on('click', dreamEvents.onIndexDreams)

  $('#dreams-display').on('submit', '.dream-update-dynamic', dreamEvents.onDynamicUpdateDream)

  $('#dreams-display').on('click', '.dream-destroy-dynamic', dreamEvents.onDynamicDestroyDream)

  $('#dream-get').on('submit', dreamEvents.onShowDream)

  $('#create-account').on('click', authUi.onCreateAccount)

  $('#exit-sign-up').on('click', authUi.onExitSignUp)
})
