import React from "react";
import "./App.css";
import Header from "./component/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setEmail("");
    setName("");
  };

  const remove = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <>
      <Header />
      <div className="form">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            value={name}
            onChange={(event) => setName(event.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained">
            Login
          </Button>
        </Box>
      </div>
      {/* data */}
      <div className="data">
        <div className="data_val">
          <h5>Name</h5>
          <h5>Email</h5>
          <h5>Remove</h5>
        </div>
      </div>
      {data.map((element, index) => {
        return (
          <div className="data">
            <div className="data_val">
              <h5>{element.name}</h5>
              <h5>{element.email}</h5>
              <button
                onClick={() => {
                  remove(index);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
