import React, { useState } from "react";

function NewProject() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [description, setDescrption] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescrption(event.target.value);
  }

  function handleSubmit(event) {
    console.log("handle submit running!");

    const newProject = {
      title: title,
      category: category,
      description: description,
      status: "Planning",
      complete: false,
    };

    fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));

    setTitle("");
    setCategory("Work");
    setDescrption("");
  }

  return (
    <div>
      <h1>New Project</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>

        <br />
        <br />

        <label htmlFor="category">Category:</label>
        <select name="category" id="category" onChange={handleCategoryChange}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="MISC">MISC</option>
        </select>

        <br />
        <br />

        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewProject;
