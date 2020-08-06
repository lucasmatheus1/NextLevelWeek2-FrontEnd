import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer dar aulas">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <select name="days" id="time">
              <option value="monday">Segunda-feira</option>
              <option value="tuesday">Terça-feira</option>
              <option value="wednesday">Quarta-feira</option>
              <option value="thursday">Quinta-feira</option>
              <option value="friday">Sexta-feira</option>
              <option value="saturday">Sábado</option>
              <option value="sunday">Domingo</option>
            </select>
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <p className="content">Nenhum professor encontrado com sua pesquisa</p>
      </main>
    </div>
  );
}

export default TeacherForm;
