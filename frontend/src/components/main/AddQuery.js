import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
export default function RecipeReviewCard() {
 
  return (
    <Card sx={{ maxWidth: 600 }}>
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            T
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="March 14, 2022"
      />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  
    </Card>
    
  );
}
