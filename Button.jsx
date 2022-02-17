import React from "react"

/**
 * TODO:
 * 1) Create a button that will log "This button was clicked!" to the console when clicked using the code template below
 * 2) The button MUST NOT have the onClick JSX attribute
 *
 *  - You can create your own React app to test
 *  - You only need to submit the modified Button.jsx file as a Github gist
 *  - You can only add/modify the code below the marker**
 */
const Button = () => {
  // Add/Modify Code below**

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
    <button
      // onClick={clickHandler} // Don't use onClick
      type="submit"
    >
      Click Me!!
      </button>
      </form>
  )
}

export default Button
