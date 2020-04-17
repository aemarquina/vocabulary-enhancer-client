const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  $('#authenticationMessages').show()
  $('#wordMessages').hide()
  $('#wordList').hide()
  $('#addWord').hide()
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  $('#authenticationMessages').show()
  $('#wordMessages').hide()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onChangePasswordButton = function (event) {
  $('#wordList').hide()
  $('.changePassword').show()
  $('.changePasswordButton').hide()
  $('#wordMessages').hide()
  $('#authenticationMessages').hide()
  $('#addAWord').hide()
}

const onAddWordForm = function (event) {
  $('#authenticationMessages').hide()
  $('#addWord').show()
  $('#wordList').hide()
  $('#wordMessages').hide()
  event.preventDefault()
  api.addWordForm()
  
}

const onAddWord = function (event) {
  $('#wordMessages').show()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addWord(data)
    .then(ui.addWordSuccess)
    .catch(ui.addWordFailure)
}

const onShowWords = function (event) {
  $('#wordMessages').show()
  $('#authenticationMessages').hide()
  $('#addWord').hide()
  $('#wordList').show()
  $('#addAWord').hide()
  event.preventDefault()
  api.showWords()
    .then(ui.showWordsSuccess)
    .catch(ui.showWordsFailure)
}

const onRemoveWord = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.removeWord(id)
    .then(function () {
      onShowWords(event)
    })
    .catch(ui.removeWordFailure)
}

const onUpdateWordForm = function (event) {
  $('#authenticationMessages').hide()
  event.preventDefault()
  const id = $(event.target).data('id')
  api.updateWordForm(id)
    .then(ui.updateWordFormSuccess)
    .catch(ui.updateWordFormFailure)
}

const onUpdateWord = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateWord(data, id)
    .then(ui.updateWordSuccess)
    .catch(ui.updateWordFailure)
}
// function formHack (form) {
//   return {
//     word: {
//       name: form[1].value,
//       definition: form[2].value,
//       parts_of_speech: form[3].value,
//       sample_sentence: form[4].value
//     }
//   }
// }
const addHandlers = () => {
  $('#getWordsButton').on('click', onShowWords)
  $('.addWord').on('submit', '#addAWord', onAddWord)
  $('.wordList').on('click', '.removeWordButton', onRemoveWord)
  $('.wordList').on('submit', '#updateWord', onUpdateWord)
  $('.wordList').on('click', '.updateWordFormButton', onUpdateWordForm)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onChangePasswordButton,
  onAddWordForm,
  onAddWord,
  onShowWords,
  onRemoveWord,
  onUpdateWord,
  onUpdateWordForm,
  addHandlers
}
