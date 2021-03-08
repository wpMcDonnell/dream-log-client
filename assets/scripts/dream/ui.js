
const onIndexSuccess = function (responseData) {
// extracting the dream from the response's data into a variable
  const dreams = responseData.dreams

  console.log(dreams)

  let dreamsHtml = ''

  // loop over each dream in the dreams array
  dreams.forEach(dream => {
    dreamsHtml += `
    <h4>Title: ${dream.title}</h4>
    <p>Description: ${dream.description}</p>
    <p>ID: ${dream._id}</p>
    <p>User: ${dream.owner}</p>
    <p>entry: ${dream.updatedAt}</p>
    <button class='dream-destroy-dynamic' data-id=${dream._id}>
      Destroy Dream
    </button>
    <form class='dream-update-dynamic' data-id=${dream._id}>
    <input type='text' name='dream[title]' placeholder='Enter Title Here' required>
    <input type='text' name='dream[description]' placeholder='Enter Description Here' required>
    <button>Update Dream</button>
    </form>
    `
  })
  $('#dreams-display').html(dreamsHtml)
  $('#form').trigger('reset')
  $('#exampleFormControlInput1').val('')
  $('#exampleFormControlTextarea1').val('')
}

const onError = function (err) {
  console.error(err)
  // if an error occurs show it on page
  // selects
  $('#error-message').html('Something went wrong, please try again')
  $('#form').trigger('reset')
}

const onCreateSuccess = function () {
  $('#user-message').html('You have successfully created a dream!, dreams have changed! Click Get All dreams to see new dreams.')
  $('#form').trigger('reset')
  $('#exampleFormControlInput1').val('')
  $('#exampleFormControlTextarea1').val('')
  $('#change-password').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#user-message').html('You have successfully updated a dream!')
  $('#dreams-display').html('Dreams have changed! Click Get All Dreams to see new dream.')
  $('#change-password').trigger('reset')

  setTimeout(() => {
    $('#user-message').html('')
  }, 5000)
}

const onShowDeletedDream = function () {
  $('#dreams-display').html('Dream was deleted')
  $('#change-password').trigger('reset')

  setTimeout(() => {
    $('#dreams-display').html('')
  }, 5000)
}

const onShowSuccess = function (responseData) {
  const dream = responseData.dream
  console.log(responseData)

  const dreamsHtml = `
  <h4>Title: ${dream.title}</h4>
  <p>Description: ${dream.description}</p>
  <p>ID: ${dream._id}</p>
  `

  $('#dreams-display').html(dreamsHtml)
  $('#change-password').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onError,
  onCreateSuccess,
  onUpdateSuccess,
  onShowDeletedDream,
  onShowSuccess
}

// const onShowSuccess = function (responseData) {
//   const dream = responseData.dream
//   console.log(responseData)
//
//   const dreamsHtml = `
//   <h4>Title: ${dream.title}</h4>
//   <p>Author: ${dream.description}</p>
//   <p>ID: ${dream._id}</p>
//   `
//
//   $('#dreams-display').html(dreamsHtml)
//   $('#form').trigger('reset')
// }
