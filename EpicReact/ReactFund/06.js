import * as React from "react";

function UsernameForm(onSubmitUsername) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(event.target.elements.usernameInput.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;




// 01 extra credit
// Another way to get the value is via a ref in React. 
// A ref is an object that stays consistent between renders of your React component.





// 02 extra Credit





//03 Extra Credit