const api = require('./api')

const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')

const onIndexDreams = function () {
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onCreateDream = function (event) {
  event.preventDefault()
  // event.target is #dreams-update, the form we added our event handler to
  const form = event.target
  // make our update request. Make sure to pass the id and the formData needed
  // to update
  const formData = getFormFields(form)
  api.createDream(formData)
  // if we could update our dream successfully, `then` run ui.onUpdateSucess
    .then(ui.onCreateSuccess)
    // otherwise, handle (catch) any errors
    .catch(ui.onError)
}

const onDynamicUpdateDream = function (event) {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)
  const updateButton = event.target
  console.log()
  const id = $(updateButton).data('id')
  api.updateDream(id, formData)

    .then(ui.onUpdateSuccess)

    .catch(ui.onError)
}

const onDynamicDestroyDream = function (event) {
  event.preventDefault()

  const deleteButton = event.target
  const id = $(deleteButton).data('id')

  api.removeDream(id)
    .then(ui.onShowDeletedDream)
    .catch(ui.onError)
}

const onDeleteDream = function (event) {
  event.preventDefault()

  const form = event.target

  const formData = getFormFields(form)
  api.removeDream(formData.dream.id)
    .then(ui.onShowDeletedDream)
    .catch(ui.onError)
}

const onShowDream = function (event) {
  // by default page refreshes when you submit form, this prevents that
  event.preventDefault()

  const form = event.target

  const formData = getFormFields(form)
  console.log('formData is', formData)

  api.show(formData.dream.id)
    .then(ui.onShowSuccess)
    .catch(ui.onError)
}

module.exports = {
  onIndexDreams,
  onCreateDream,
  onDynamicUpdateDream,
  onDynamicDestroyDream,
  onDeleteDream,
  onShowDream
}
