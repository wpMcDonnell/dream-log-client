'use strict'

const authEvents = require('./auth/events')

const dreamEvents = require('./dream/events')

const authUi = require('./auth/ui')

const dreamUi = require('./dream/ui')

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

  $('.create-post-button').on('click', dreamUi.onCreatePost)

  $('#create-post-cancel-button').on('click', dreamUi.onCancelPost)

  $('.bi-list').on('click', authUi.onMenu)

  $('#exit-account-settings').on('click', authUi.onExitAccountSettings)

  $('.bi-search').on('click', dreamUi.onSearch)

  $('#exit-search-button').on('click', dreamUi.onExitSearch)
})
