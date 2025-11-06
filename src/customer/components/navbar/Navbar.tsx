import React, { useState } from 'react';
import { Box, Button, IconButton, Avatar, Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme, useMediaQuery } from '@mui/material';

import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from '@mui/icons-material';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../../data/category/mainCategory';

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [selectedCategory, setSelectedCategory] = useState('men');
  const [showCategorySheet, setShowCategorySheet] = useState(false);

  return (
    <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
      <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-2">
            {!isLarge && (
              <IconButton>
                <MenuIcon />
              </IconButton>
            )}
            <h1 className="logo cusrsor-pointer text-lg md:text-2xl text-primary-color">
              Bz Ecomm
            </h1>
          </div>
          <ul className="flex items-center font-medium text-gray-800">
            {mainCategory.map((item) => (
              <li
                onMouseLeave={() => {
                  setShowCategorySheet(false);
                }}
                onMouseEnter={() => {
                  setShowCategorySheet(true);
                  setSelectedCategory(item.categoryId);
                }}
                className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color
                flex items-center"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-1 lg:gap-6 items-center">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          {true ? (
            <Button className="flex items-center gap-2">
              <Avatar
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/c/p/m-db1024-15-3bros-original-imagz8zjfxthf7kn.jpeg"
                sx={{ width: 29, height: 29 }}
              />
              <h1 className="font-semibold hidden lg:block">Bz Logged in</h1>
            </Button>
          ) : (
            <Button variant="contained">LogIn</Button>
          )}
          <IconButton>
            <FavoriteBorder sx={{ fontSize: 29 }} />
          </IconButton>
          <IconButton>
            <AddShoppingCart className="text-gray-700" sx={{ fontSize: 29 }} />
          </IconButton>
          {isLarge && (
            <Button startIcon={<Storefront />} variant="outlined">
              Become Seller
            </Button>
          )}
        </div>
      </div>
      {showCategorySheet && (
        <div
          onMouseLeave={() => setShowCategorySheet(false)}
          onMouseEnter={() => setShowCategorySheet(true)}
          className="categorySheet absolute top-[4.41rem] left-20 right-20 border"
        >
          <CategorySheet selectedCategory={selectedCategory} />
        </div>
      )}
    </Box>
  );
};

export default Navbar;
