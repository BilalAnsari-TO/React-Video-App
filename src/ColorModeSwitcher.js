import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

 const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      pos={'fixed'}
      zIndex={'overlay'}
      top={4}
      right={4}
      {...props}
    />
  );
};

export default ColorModeSwitcher;