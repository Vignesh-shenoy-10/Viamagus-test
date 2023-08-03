import React, { useState } from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Alert from '@mui/material/Alert'
import Navbar from "../Components/navbar"
import Typography from "@mui/material/Typography";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Createpost() {
  const navigate = useNavigate()
  const navigateBack = () => {
      navigate('/')
    };
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [submission, setSubmission] = useState()
  const [validation, setValidation] = useState()
  const [successroute, setSuccessroute] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim().length === 0|| description.trim().length === 0 ){
        setValidation(true)
    }
    else {
        setValidation(false)
        const postData = {
            title: title,
            description: description,
          };
          axios
            .post("https://jsonplaceholder.typicode.com/posts", postData)
            .then((response) => {
              console.log(response);
              setSubmission(true)
             
              setDescription("")
              setTitle("")
              setTimeout(
                  function() {
                     setSubmission(false)
                     setSuccessroute(true)
                  },
                  5000
              );
            })
            .catch((error) => console.error(error));
    }
    
  };
  return (
    <div>
        <Navbar/>
        <IconButton
          onClick={navigateBack}
          variant="solid"
          size="sm"
          color="primary"
          sx={{ ml: "auto", fontWeight: 600, marginTop: 2, width: 300 }}
        >
          <ArrowBackIcon />
          Back to Home
        </IconButton>
        <Typography variant="h3" gutterBottom style={{marginTop: '15px', fontFamily: 'Roboto Condensed' }}>
        Create a post
      </Typography>
     
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="title"
            placeholder="Enter a post title"
            variant="outlined"
            value={title}
            style={{width:"400px"}}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="desc"
            style={{width:"400px"}}
            placeholder="Write a description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            required
            rows={6}
          />
        </Box>
        <center>
        <Stack spacing={2} width={'200px'} style={{marginTop:'20px'}}>
          <Button variant="outlined" onClick={handleSubmit}>Create</Button>
        </Stack>
        </center>
        {submission && <Alert severity="success" style={{marginTop:'50px',position: 'fixed', bottom: 0,width:'100%'}}>Post created successfully!</Alert>}
        {validation && <Alert severity="error" style={{marginTop:'50px',position: 'fixed', bottom: 0,width:'100%'}}>Please fill the fields before submitting</Alert>}
        {successroute ?  <Navigate to="/displayposts" />: null}
    </div>
  );
}
