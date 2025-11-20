import { Radio } from '@mui/material';
import React from 'react';

const AddressCard = () => {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };

  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio checked onChange={handleChange} value="" name="radio-button" />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Aymane</h1>
        <p className="w-[320px]">95 rue Cambronne, 75015, Paris</p>
        <p>
          <strong>Mobile: </strong> 07 61 93 54 49
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
