import { useEffect, useState } from "react";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setIsSubmitted(true);
  }, [name, email, mobileno, password]);

  function onSubmit(e) {
    e.preventDefault();
    setUserData({ name, email, mobileno, password });
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMobileno("");
    setPassword("");
  }

  function updateData() {
    if (isSubmitted) {
      setName(userData.name);
      setEmail(userData.email);
      setMobileno(userData.mobileno);
      setPassword(userData.password);
    }
  }

  return (
    <div className="user-form">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className="user-control"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          className="user-control"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        <input
          className="user-control"
          name="mobileno"
          type="number"
          value={mobileno}
          onChange={(e) => setMobileno(e.target.value)}
          placeholder="Enter Your Moblie No"
        />
        <input
          className="user-control"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
        <button className="form-btn" type="submit">
          Submit
        </button>
        <button onClick={updateData} className="form-btn" type="button">
          Updata
        </button>
      </form>

      {isSubmitted && (
        <div style={{ textAlign: "left" }}>
          <div>
            <label>Username:</label>
            <span>{userData.name}</span>
          </div>
          <div>
            <label>Email:</label>
            <span>{userData.email}</span>
          </div>
          <div>
            <label>Mobile No:</label>
            <span>{userData.mobileno}</span>
          </div>
          <div>
            <label>Password:</label>
            <span>{userData.password}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
