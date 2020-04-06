const config = require('./config')
const store = require('./store')
const addWordTemplate = require('./templates/add-word.handlebars')

const signUp = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const addWordForm = function () {
  const addWordHTML = addWordTemplate
  $('.addWord').html(addWordHTML)
}

const addWord = function (data) {
  return $.ajax({
    url: config.apiUrl + '/words',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showWords = function () {
  return $.ajax({
    url: config.apiUrl + '/words',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeWord = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/words/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWordForm = function (id) {  
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/words/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWord = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/words/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  addWordForm,
  addWord,
  showWords,
  updateWordForm,
  updateWord,
  removeWord
}
