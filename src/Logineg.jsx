import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState({ title: "", body: "" });
  const [editId, setEditId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/name")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {




      axios
        .put(`http://localhost:3001/name/${editId}`, input)
        .then((response) => {
          setData(
            data.map((item) => (item.id === editId ? response.data : item))
          );
          setEditId(null);
          setInput({ title: "", body: "" });
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      axios
        .post("http://localhost:3001/name", input)
        .then((response) => {
          setData([...data, response.data]);
          setInput({ title: "", body: "" });
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/name/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEdit = (id) => {
    const postToEdit = data.find((item) => item.id === id);
    setInput({ title: postToEdit.title, body: postToEdit.body });
    setEditId(id);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={input.title}
          placeholder="Enter the title"
          onChange={handleChange}
        />
        <textarea
          name="body"
          value={input.body}
          placeholder="Enter the body"
          onChange={handleChange}
        />
        <button type="submit">{editId ? "Update Post" : "Add Post"}</button>
      </form>
      <h1>REACT TUTORIAL</h1>
      {error !== "" ? <h1>{error}</h1> : null}
      {data.map((datas) => {
        const { id, title, body } = datas;
        return (
          <div key={id}>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={() => handleEdit(id)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default App;