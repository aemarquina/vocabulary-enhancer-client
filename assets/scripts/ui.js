const store = require('./store')
const showWordsTemplate = require('./templates/word-listing.handlebars')
const addWordTemplate = require('./templates/add-word.handlebars')
const updateWordTemplate = require('./templates/update-word.handlebars')

const signUpSuccess = function (data) {
  $('#authenticationMessages').text('You have successfully signed up❕')
  $('.signUpText').val('')
}

const signUpFailure = function (error) {
  $('#authenticationMessages').text('You were unable to sign up❕')
  $('.signUpText').val('')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#authenticationMessages').text('You have successfully signed in❕')
  $('.main-page').show()
  $('.sign-in-page').hide()
  $('.signInText').val('')
}

const signInFailure = function (error) {
  $('#authenticationMessages').text('You were unable to sign in❕')
  $('.signInText').val('')
}

const signOutSuccess = function (data) {
  $('#authenticationMessages').text('You have successfully signed out❕')
  $('.main-page').hide()
  $('.sign-in-page').show()
}

const signOutFailure = function (error) {
  $('#authenticationMessages').text('You were unable sign out❕')
}

const changePasswordSuccess = function (data) {
  $('#authenticationMessages').text('You have successfully changed your password❕')
  $('.changePassword').hide()
  $('.changePasswordButton').show()
  $('.changePasswordText').val('')
}

const changePasswordFailure = function (error) {
  $('#authenticationMessages').text('You were unable to change your password❕')
  $('.changePasswordText').val('')
}

const addWordFormSuccess = function () {
  const addWordHTML = addWordTemplate
  $('.addWord').html(addWordHTML)
}
const addWordSuccess = function (data) {
  $('#wordMessages').text('You added a word 🥳')
  $('.addWordText').val('')
}

const addWordFailure = function (data) {
  $('#wordMessages').text('You are unable to add a word ‼️')
}

const showWordsSuccess = function (data) {
  const showWordsHTML = showWordsTemplate({ words: data.words })
  $('.wordList').html(showWordsHTML)
  $('#wordMessages').text('Your list of words 🥳')
}

const showWordsFailure = function (error) {
  $('#wordMessages').text('You are unable to view words ‼️')
}

const updateWordFormSuccess = function (data) {
  const updateWordHTML = updateWordTemplate({ word: data.word })
  $('.wordList').html(updateWordHTML)
}

const updateWordSuccess = function (id, data) {
  $('#wordMessages').text('You updated a word 🥳')
  $('.updateWordText').val('')
}
const removeWordSuccess = function () {
  $('#wordMessages').text('You just removed a word ‼️')
}

const removeWordFailure = function (error) {
  $('#wordMessages').text('You were unable to remove a word ‼️')
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
  addWordFormSuccess,
  addWordSuccess,
  addWordFailure,
  showWordsSuccess,
  showWordsFailure,
  removeWordSuccess,
  removeWordFailure,
  updateWordSuccess,
  updateWordFormSuccess
}
