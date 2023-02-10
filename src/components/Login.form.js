import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const LoginForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRememberMeChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);

    // here call the API to signup/login
  };

  return (
    <div className="flex align-items-center justify-content-center h-screen">
      <form onSubmit={loginSubmit} autoComplete="off">
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-4">
            <h2> Aprendiendo React Hook Forms</h2>
          </div>
          <div className="p-field p-col-12 p-md-12">
            <span className="p-float-label">
              <InputText
                id="email"
                type="text"
                placeholder="introduzca su Email"
              />
              <label htmlFor="email">Email</label>
            </span>
          </div>
          <div className="p-4"></div>
          <div className="p-field p-col-12 p-md-12">
            <span className="p-float-label">
              <InputText
                id="password"
                type="password"
                placeholder="introduzca su contrasena"
              />
              <label htmlFor="password">Contrasena</label>
            </span>
          </div>
          <div className="p-field p-col-12 p-md-12 p-2">
            <Checkbox
              inputId="rememberMe"
              name="remenberMe"
              checked={isChecked}
              value={isChecked}
              onChange={handleRememberMeChange}
            />
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
