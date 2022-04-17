import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Index.jsx";
import Footer from "./components/Footer/Index.jsx";
import CreateNotes from "./components/Main body/CreateNotes/Index.jsx";
import Notes from "./components/Main body/Notes/Index.jsx";
import Quotes from "./components/Header/DailyQuotes/Index.jsx";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((prevData) =>
      prevData.filter((currData, index) => {
        return index !== id;
      })
    );
  };

  return (
    <Router>
      <Switch>
        <div>
          <Header />
          <Quotes />
          <CreateNotes passNote={addNote} />
          {addItem.map((val, index) => {
            return (
              <Notes
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
              />
            );
          })}
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
