const api = require('./api')

const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')

const onIndexDreams = function () {
  console.log('In index books')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

module.exports = {
  onIndexDreams
}
