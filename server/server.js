import express from "express";

// const express = require("express")
const app = express();

app.get("/api/notes", (req, res) => {
    res.status(200).send("You have 5 notes");
})

app.post("/api/notes", (req, res) =>{
    res.status(201).json({message: "Post created successfully"})
})

app.put("/api/notes/:id", (req, res)=>{
    res.status(200).json({message: "Post updated successfully"})
})

app.delete("/api/notes/:id", (req, res)=>{
res.status(200).json({message: "Post deleted successfully"})
})

app.listen(5001, () => {
    console.log("Server updated on PORT: 5001")
})