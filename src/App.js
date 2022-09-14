import React, { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, toggleToDo, delToDo } from "./actions";

const App = () => {
  const [text, setText] = useState(""); //yazılan her harfi reduxta tutmaya gerekyok
  // o yüzden local stage oluşturduk
  const liste = useSelector((state) => state.liste);
  const dispatch = useDispatch();

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
            dispatch(addToDo(text));
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {liste.map((item) => (
          <div
            onClick={() => dispatch(toggleToDo(item.id))}
            key={item.id}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(delToDo())} className="temizle">
        Tamamlananları Temizle
      </button>
    </div>
  );
};

export default App;
