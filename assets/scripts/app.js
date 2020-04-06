'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const vocabEvents = require('./events')

$(() => {
  $('#sign-up').on('submit', vocabEvents.onSignUp)
  $('#sign-in').on('submit', vocabEvents.onSignIn)
  $('#sign-out').on('submit', vocabEvents.onSignOut)
  $('.changePasswordButton').on('click', vocabEvents.onChangePasswordButton)
  $('#change-password').on('submit', vocabEvents.onChangePassword)
  $('#addWordForm').on('click', vocabEvents.onAddWordForm)
  vocabEvents.addHandlers()
})
