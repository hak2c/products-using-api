import { memo } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { submitLoginForm, setShowLoginForm } from "../usersSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.users);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(submitLoginForm(data));
  };

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
        <form className="loginForm--content" onSubmit={handleSubmit(onSubmit)}>
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
                  required
                  className="form-control"
                  {...register("username")}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <div className="loginForm--input">
                <input
                  type="password"
                  id="loginForm--input-email"
                  required
                  className="form-control"
                  {...register("password")}
                />
              </div>
            </div>
            <div className="form-group">
              <input type="submit" id="loginForm--form-submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(LoginForm);
