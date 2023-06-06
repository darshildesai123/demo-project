import { useEffect, useState } from "react";


function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsSubmitted(false);
  }, [name, email, mobileno, password]);

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className="user-form">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className="user-control"
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          className="user-control"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        <input
          className="user-control"
          name="mobileno"
          type="number"
          onChange={(e) => setMobileno(e.target.value)}
          placeholder="Enter Your Moblie No"
        />
        <input
          className="user-control"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>

      {isSubmitted && (
        <div style={{ textAlign: "left" }}>
          <div>
            <label>Username:</label>
            <span>{name}</span>
          </div>
          <div>
            <label>Email:</label>
            <span>{email}</span>
          </div>
          <div>
            <label>Mobile No:</label>
            <span>{mobileno}</span>
          </div>
          <div>
            <label>Password:</label>
            <span>{password}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
