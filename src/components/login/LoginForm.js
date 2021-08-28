import { memo, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";

import {
  submitLoginForm,
  setShowLoginForm,
} from "../../features/users/usersSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    dispatch(submitLoginForm(JSON.stringify(data)));
  }
  return (
    <div className="loginForm">
      <div className="loginForm--overlay"></div>
      <div className="loginForm--popup">
        <span
          className="loginForm--popup-close"
          onClick={() => {
            document.body.classList.toggle("stopScrolling");
            dispatch(setShowLoginForm(false));
          }}
        >
          <Unicons.UilTimes size="20" color="#000000" />
        </span>
        <div className="loginForm--content">
          <div className="loginForm--title text-center">
            <h3>Login</h3>
          </div>
          <div className="loginForm-form">
            {status != "" && (
              <div className="loginForm-error">
                <p>{status}</p>
              </div>
            )}

            <div className="form-group">
              <label className="control-label">Username</label>
              <div className="loginForm--input">
                <input
                  type="text"
                  id="loginForm--input-username"
                  name="loginForm--input-username"
                  required
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <div className="loginForm--input">
                <input
                  type="password"
                  id="loginForm--input-email"
                  name="loginForm--input-email"
                  required
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                id="loginForm--form-submit"
                name="loginForm--form-submit"
                value="Login"
                onClick={
                  username !== "" && password !== ""
                    ? (e) => handleSubmit(e)
                    : undefined
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LoginForm);
