import { renderToString } from "react-dom/server";
import Welcome from "./Welcome";
import express from 'express';
import template from './template';
import React from "react";
import ReactDOM from "react-dom";


const app = express();

app.get('/hello',(req,res) => {
	res.send("Hello World");
})

app.get("/", (req, res) => {  
	
  const appString = renderToString(<Welcome />);

  res.send(template({
    body: appString,
    title: 'Hello World from the server'
  }));
});

app.listen(3000);