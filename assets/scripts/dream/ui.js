
const onIndexSuccess = function (responseData) {
// extracting the dream from the response's data into a variable
  $('#dreams-display').show()
  if (JSON.stringify(responseData.dreams) === '[]') {
    $('#dreams-display').html('There are currently no dreams. Please use the purple pencil to create a dream')
    $('#dreams-index').hide()
  } else {
    const dreams = responseData.dreams

    let dreamsHtml = ''

    // loop over each dream in the dreams array
    dreams.forEach(dream => {
      dreamsHtml += `
    <hr>
    <h4>Title: ${dream.title}</h4>
    <p>Description: ${dream.description}</p>
    <p>ID: ${dream._id}</p>
    <p>User: ${dream.owner}</p>
    <p>entry: ${dream.updatedAt}</p>
    <button class='dream-destroy-dynamic' data-id=${dream._id}>
      Destroy Dream
    </button>
    <br>
    <br>
    <p> Enter Edits Below ... <p>
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
    $('#user-message').html('')
    $('#dreams-index').hide()
  }
}

const onError = function (err) {
  console.error(err)
  // if an error occurs show it on page
  // selects
  $('#user-message').html('Something went wrong, please try again')
  $('#dream-destroy').trigger('reset')
  $('#dream-get').trigger('reset')
  setTimeout(() => {
    $('#user-message').html('')
  }, 10000)
}

const onCreateSuccess = function () {
  $('#user-message').html('You have successfully created a dream! Dreams have changed! Click Get All dreams to see new dreams.')
  $('#exampleFormControlInput1').val('')
  $('#exampleFormControlTextarea1').val('')
  $('#change-password').trigger('reset')
  $('.create-post-div').hide()
  $('#dreams-index').show()
  $('.dreams-posts').show()
  $('#dreams-display').hide()
  setTimeout(() => {
    $('#user-message').html('')
  }, 5000)
  $('.create-post-button').show()
}

const onUpdateSuccess = function () {
  $('.dreams-posts').show()
  $('#dreams-index').show()
  $('#user-message').html('You have successfully updated a dream!')
  $('#dreams-display').html('Dreams have changed! Click Get All Dreams to see new dream.')
  $('#change-password').trigger('reset')

  setTimeout(() => {
    $('#user-message').html('')
  }, 5000)
}

const onShowDeletedDream = function () {
  $('.dreams-posts').show()
  $('#dreams-display').html('Dream was deleted')
  $('#dreams-index').show()
  $('#change-password').trigger('reset')
  $('#dream-get').hide()
  $('#dream-destroy').hide()
  $('.bi-search').show()
  $('#dream-get').trigger('reset')
  $('#dream-destroy').trigger('reset')
  $('#exit-search-button').hide()

  setTimeout(() => {
    $('#user-message').html('')
  }, 5000)
}

const onShowSuccess = function (responseData) {
  const dream = responseData.dream

  const dreamsHtml = `
  <h4>Title: ${dream.title}</h4>
  <p>Description: ${dream.description}</p>
  <p>ID: ${dream._id}</p>
  `

  $('#dreams-display').html(dreamsHtml)
  $('#change-password').trigger('reset')
  $('.create-post-button').show()
  $('.dreams-posts').show()
  $('#dream-get').hide()
  $('#dream-destroy').hide()
  $('#exit-search-button').hide()
  $('#dream-get').trigger('reset')
  $('#dreams-index').show()
  $('.bi-search').show()
  $('#dream-destroy').trigger('reset')
}

const onCreatePost = function () {
  $('.create-post-div').show()
  $('#dream-destroy').hide()
  $('#dream-get').hide()
  $('.dreams-posts').hide()
  $('.create-post-button').hide()
  $('#exit-search-button').hide()
  $('.bi-search').show()
  $('#dream-get').trigger('reset')
  $('#dream-destroy').trigger('reset')
}

const onCancelPost = function () {
  $('.create-post-div').hide()
  $('.dreams-posts').show()
  $('.create-post-button').show()
  $('#exampleFormControlInput1').val('')
  $('#exampleFormControlTextarea1').val('')
}

const onSearch = function () {
  $('#dream-get').show()
  $('#dream-destroy').show()
  $('.dreams-posts').hide()
  $('#exit-search-button').show()
  $('.create-post-div').hide()
  $('.bi-search').hide()
  $('#exampleFormControlInput1').val('')
  $('#exampleFormControlTextarea1').val('')
}

const onExitSearch = function () {
  $('.create-post-button').show()
  $('.dreams-posts').show()
  $('#dream-get').hide()
  $('#dream-destroy').hide()
  $('#exit-search-button').hide()
  $('.bi-search').show()
  $('#dream-get').trigger('reset')
  $('#dream-destroy').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onError,
  onCreateSuccess,
  onUpdateSuccess,
  onShowDeletedDream,
  onShowSuccess,
  onCreatePost,
  onCancelPost,
  onSearch,
  onExitSearch
}
