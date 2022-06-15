import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useState } from "react";
import Swal from "sweetalert2";
import app_config from "../../config";
import { Formik } from "formik";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function AddNovel() {
  const url = app_config.api_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const novelform = {
    title: "",
    description: "",
    thumbnail: "",
    price: "",
    author: "",
    rentable: false,
    exchangable: false,
    rentprice: 0,
    uploadedBy: currentUser._id,
  };

  const [age, setRent] = React.useState("");

  const handleChange = (event) => {
    setRent(event.target.value);
  };

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

    fetch(url + "/novel/add", reqOpt)
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

    fetch(url + "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const uploadNovel = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setNovel(file.name);
    formdata.append("file", file);

    fetch(+"/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Card sx={{ maxWidth: 800 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "70ch" },
        }}
      >
        <h1>ADD NOVEL</h1>
        <Formik initialValues={novelform} onSubmit={novelSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                value={values.title}
                id="title"
                label=" Title of Book*"
                variant="filled"
              />
              <br />
              <br />

              <TextField
                onChange={handleChange}
                value={values.author}
                id="author"
                label="Author*"
                variant="filled"
              />
              <br />
              <br />

              <TextField
                onChange={handleChange}
                value={values.description}
                id="description"
                label="Description*"
                variant="filled"
              />
              <br />
              <br />

              <TextField
                onChange={handleChange}
                value={values.price}
                id="price"
                label="Price*"
                variant="filled"
              />
              <br />
              <br />
              <input
                type="file"
                className="form-control"
                onChange={uploadThumbnail}
                placeholder="thumbnail"
              />
              <label class="form-label" for="title">
                Thumbnail
              </label>
              <FormControlLabel
                control={
                  <Checkbox
                    className="w-50 mx-auto"
                    type="checkbox"
                    checked={values.exchangable}
                    onChange={handleChange}
                    id="exchangable"
                  />
                }
                label="Exchangable"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className="w-50 mx-auto"
                    type="checkbox"
                    checked={values.rentable}
                    onChange={handleChange}
                    id="rentable"
                  />
                }
                label="Rentable"
              />

              <TextField
                onChange={handleChange}
                value={values.rentprice}
                id="rentprice"
                label="Rentprice*"
                variant="filled"
              />
              <br />
              <br />

              <Stack direction="row" spacing={5}>
                <Button variant="contained" component="label">
                  {" "}
                  Upload File <input type="file" hidden />
                </Button>
                <Button variant="contained" type="submit" color="success">
                  Submit
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Card>
  );
}
