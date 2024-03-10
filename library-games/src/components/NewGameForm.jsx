import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};

export default function NewGameForm({ addGame }) {

  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          id="title"
          label="Título:"
          value={title}
          setValue={setTitle}
        />
      </div>
      <div>
        <TextInput id="cover" label="Capa:" value={cover} setValue={setCover} />
      </div>
      <button type="submit">Adicionar a biblioteca</button>
    </form>
  );
}