import React from "react";

const PasswordResetle = ({onViewChange}) => (
  <div>
    <form className="form-inline">
      <div className="form-group ">
        <input
          style={{width: "346px", marginRight: "10px"}}
          type="text"
          className="form-control"
          placeholder="E-Posta"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Şifremi Resetle
      </button>
    </form>

    <p>
      Giriş yapmak için{" "}
      <b>
        <u>
          <a
          href="#"
            onClick={e => {
              e.preventDefault();
              onViewChange(1);
            }}
          >
            Tıklayınız
          </a>
        </u>
      </b>
    </p>
  </div>
);

export default PasswordResetle;
