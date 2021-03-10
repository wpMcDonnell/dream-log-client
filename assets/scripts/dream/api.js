
const config = require('../config')
const store = require('../store.js')

const index = function () {
  return $.ajax({
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    url: config.apiUrl + '/dreams'
  })
}

const show = function (id) {
  return $.ajax({
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    url: config.apiUrl + '/dreams/' + id
  })
}

const removeDream = function (id) {
  return $.ajax({
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    url: config.apiUrl + '/dreams/' + id
  })
}

//  update a single dream, using formData, by its id
const updateDream = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    url: config.apiUrl + '/dreams/' + id,
    data: formData
  })
}

const createDream = function (formData) {
  return $.ajax({
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    url: config.apiUrl + '/dreams/',
    //  send form data when making our update request
    data: formData

  })
}

// exports our index method, so can use it in event.js
module.exports = {
  index,
  show,
  removeDream,
  updateDream,
  createDream
}
