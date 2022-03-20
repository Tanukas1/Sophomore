import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          this is first list query page.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          this is first list query page.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          this is first list query page.
        </Typography>
      </CardContent>
    </Card>
    
  );
}
