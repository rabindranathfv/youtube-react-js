import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const LoginForm = () => {
  const loginSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);

    // here call the API to signup/login
  };

  return (
    <div className="flex align-items-center justify-content-center h-screen">
      <form autocomplete="off" onSubmit={loginSubmit}>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-4">
            <h2> Aprendiendo React Hook Forms</h2>
          </div>
          <div className="p-field p-col-12 p-md-12">
            <span className="p-float-label">
              <InputText
                id="new-email"
                type="text"
                name="new-email"
                placeholder="introduzca su Email"
              />
              <label htmlFor="email">Email</label>
            </span>
          </div>
          <div className="p-4"></div>
          <div className="p-field p-col-12 p-md-12">
            <span className="p-float-label">
              <InputText
                name="new-password"
                id="new-password"
                autocomplete="new-password"
                type="password"
                placeholder="introduzca su contrasena"
              />
              <label htmlFor="password">Contrasena</label>
            </span>
          </div>
          <div className="p-field p-col-12 p-md-12 p-2">
            <input type="checkbox" id="remenberMe" name="remenberMe" />
            <label htmlFor="rememberMe" className="p-checkbox-label p-2">
              Recuerdame
            </label>
          </div>
          <div className="p-field p-col-12 p-md-12">
            <Button type="submit" label="Ingresar" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
