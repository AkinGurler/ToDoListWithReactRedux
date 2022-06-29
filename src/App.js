import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { addToDo, toggleToDo, delToDo } from "./actions";

const App = (props) => {
  const [text, setText] = useState(""); //yazılan her harfi reduxta tutmaya gerekyok
  // o yüzden local stage oluşturduk

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            props.addToDo(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div
            onClick={() => props.toggleToDo(item.id)}
            key={item.id}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => props.delToDo()} className="temizle">
        Tamamlananları Temizle
      </button>
    </div>
  );
};

const mapStoreToProps = (state) => {
  return {
    liste: state.liste
  };
};

export default connect(mapStoreToProps, { addToDo, toggleToDo, delToDo })(App);
