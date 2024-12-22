import { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { checkMessage, validateEmail, checkName } from "../utils/Helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setErrorMessage("");

    // Based on the input type, we set the state of either email, username, and password
    switch (inputType) {
      case "name":
        setName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        break;
      case "message":
        setMessage(inputValue);
        break;
      default:
        console.error(inputType);
        break;
    }
  };

  const handleNameField = () => {
    if (checkMessage(name)) {
      setErrorMessage(
        `name is required`
      );
      return;
    }
  };

  const handleEmailFormat = () => {
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address.");
    }
  };

  const handleMessageField = () => {
    if (checkMessage(message)) {
      setErrorMessage(
        `message is required`
      );
      return;
    }
  };



  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (checkName(name)) {
      setErrorMessage(
        `name is required`
      );
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address.");
    }

    if (checkMessage(message)) {
      setErrorMessage(
        `message is required`
      );
      return;
    }




    // If successful, we want to clear out the input after registration.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="d-flex flex-column p-2">
      <h2 className='text-start p-2'>Contact</h2>
      <form className="form w-50 mt-2 mb-3" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleNameField}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleEmailFormat}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleMessageField}
            placeholder="Message"
            rows="4"
          ></textarea>
        </div>
        {errorMessage && (
          <div className="text-start">
            <p className="text-danger">{errorMessage}</p>
          </div>
        )}
        <div className="text-start">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>


  );
}

export default Contact;