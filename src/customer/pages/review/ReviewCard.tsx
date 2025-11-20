import { Delete } from '@mui/icons-material';
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid container spacing={8}>
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: '#9155FD' }}
            >
              Z
            </Avatar>
          </Box>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Aym Bz</p>
              <p className="opacity-70">07/10/2025 15h20</p>
            </div>
          </div>
          <Rating readOnly value={4.5} precision={0.5} />
          <p>Value for money product, great product</p>
          <div>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/mh-11-2-amazon-1635870225.png"
              alt="Review"
              className="w-24 h-24 object-cover"
            />
          </div>
        </Grid>
      </Grid>
      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
