import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


export default function AddNovel() {
  return (
    <Card sx={{ maxWidth: 700 }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '50ch' },
      }}>

      <h1>ADD NOVEL</h1>
      <TextField id="filled-basic" label="Name*" variant="filled" /><br/>
      <TextField id="filled-basic" label="Auothor Name*" variant="filled" /><br/>
      <TextField id="filled-basic" label="Title*" variant="filled" /><br/>
      <TextField id="filled-basic" label="Publication*" variant="filled" /><br/>
      <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Discription" style={{ width: 200 }}/><br/>
      <Stack direction="row" spacing={5}>
      <Button variant="contained" component="label"> Upload File <input type="file" hidden/></Button>
      <Button variant="contained" color="success">Submit</Button>
      </Stack>
    </Box>
    </Card>
  );
}
