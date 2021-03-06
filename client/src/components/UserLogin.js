import React from "react";

const UserLogin = (props) => {
//   const [formState, setFormState] = useState({
//     username: "",
//     password: "",
//   });

//   useEffect(() => {
//     setFormState(props.userData)
//   }, [props.userData]);

//   const handleChange = (e) => {
//     const newState = { ...formState };
//     newState[e.target.name] = e.target.value;
//     setFormState(newState);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.submit(formState);
//   };

  return (
    <div className="container">
      <div className="row">
        <div id="user-login" className="col-sm">
          <form >
            <h4 className="section-heading">Login</h4>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                // value={formState.username}
                // onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                // value={formState.password}
                // onChange={handleChange}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-info">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { UserLogin };
