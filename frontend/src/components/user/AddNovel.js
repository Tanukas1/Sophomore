import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from "react";
import Swal from "sweetalert2";
import app_config from '../../config';
import { Formik } from "formik";
import formSubmit from "react";
import novelform from "react";



export default function AddNovel() {

  const url = app_config.api_url;

  const Novelform = {
    BookName: '',
    AuthorName: '',
    TitleOfBook: '',
    Publication: ''
  }


  const [thumbnail, setThumbnail] = useState("");
  const [novel, setNovel] = useState("");

  const novelSubmit = (values) => {
    values.thumbnail = thumbnail;
    values.file = novel;
    console.log(values);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(+ "/novel/add", reqOpt)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Novel Added Successfully!",
        });
      });
  };

  const uploadThumbnail = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setThumbnail(file.name);
    formdata.append("file", file);

    fetch(+ "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const uploadNovel = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setNovel(file.name);
    formdata.append("file", file);

    fetch(+ "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };



  return (
    <Card sx={{ maxWidth: 800 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root': { width: '50ch' },
        }}>

        <h1>ADD NOVEL</h1>
        <Formik initialValues={novelform} onSubmit={formSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>


              <TextField onChange={handleChange} 
              value={values.BookName} id="BookName" label=" Book Name*" variant="filled" /><br /><br />

              <TextField onChange={handleChange} 
              value={values.AuthorName} id="Author Name" label="Auothor Name*" variant="filled" /><br /><br />

              <TextField onChange={handleChange} 
              value={values.TitleOfBook} id="Title oF Book" label="Title of Book*" variant="filled" /><br /><br />

              <TextField onChange={handleChange} 
              value={values.Publication} id="Publication"  label="Publication*" variant="filled" /><br /><br />

              <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Discription" style={{ width: 200 }} /><br /><br />
              <Stack direction="row" spacing={5}>
                <Button variant="contained" component="label"> Upload File <input type="file" hidden /></Button>
                <Button variant="contained" type="submit" color="success">Submit</Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Card>
  );
}