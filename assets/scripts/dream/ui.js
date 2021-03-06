
const onIndexSuccess = function (responseData) {
// extracting the book from the response's data into a variable
  const dreams = responseData.dreams

  console.log(dreams)

  //  creating a string that will store the HTML for all the Books
  //  we want to show on the screen

  let dreamsHtml = ''

  // loop over each book in the books array
  dreams.forEach(dream => {
    dreamsHtml += `
    <h4>Title: ${dream.title}</h4>
    <p>Author: ${dream.description}</p>
    <p>ID: ${dream._id}</p>
    <button class='dream-destroy-dynamic' data-id=${dream._id}>
      Destroy Dream
    </button>
    <form class='dream-update-dynamic' data-id=${dream._id}>
    <input type='text' name='dream[title]' placeholder='Enter Title Here' required>
    <input type='text' name='book[description]' placeholder='Enter Description Here' required>
    <button>Update Dream</button>
    </form>
    `
  })
  $('#dreams-display').html(dreamsHtml)
  $('#form').trigger('reset')
}

const onError = function (err) {
  console.error(err)
  // if an error occurs show it on page
  // selects
  $('#error-message').html('Something went wrong, please try again')
}

const onCreateSuccess = function () {
  $('#user-message').html('You have successfully created a book!, Books have changed! Click Get All Books to see new books.')
}

module.exports = {
  onIndexSuccess,
  onError,
  onCreateSuccess
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
