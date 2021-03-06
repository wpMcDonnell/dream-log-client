const api = require('./api')

const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')

const onIndexDreams = function () {
  console.log('In index books')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onCreateDream = function (event) {
  event.preventDefault()
  // event.target is #books-update, the form we added our event handler to
  const form = event.target
  // make our update request. Make sure to pass the id and the formData needed
  // to update
  const formData = getFormFields(form)
  api.createDream(formData)
  // if we could update our book successfully, `then` run ui.onUpdateSucess
    .then(ui.onCreateSuccess)
    // otherwise, handle (catch) any errors
    .catch(ui.onError)
}

module.exports = {
  onIndexDreams,
  onCreateDream
}
