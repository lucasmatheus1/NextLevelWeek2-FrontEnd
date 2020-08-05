import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/34188223?s=460&u=9659b2e87d26bf4d8216607880f78e274b8d6365&v=4"
          alt="Lucas Matheus"
        />
        <div>
          <strong>Lucas Matheus</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>Te ensino matemática do jeito certo.</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
