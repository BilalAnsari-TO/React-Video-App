import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,useDisclosure, VStack, HStack,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"


const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <>
        <Button zIndex={'overlay'} top={4} pos={'fixed'} left={4} h={10} w={10} p={0} ref={btnRef}  onClick={onOpen} colorScheme={'purple'} >
            <BiMenuAltLeft/>
        </Button>

        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'} >
                    <Link to={"/"} >Home</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'} >
                    <Link to={"/videos"} >Videos</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'} >
                    <Link to={"/videos?category=free"} >Free Videos</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'} >
                    <Link to={"/upload"} >Upload Videos</Link>
                </Button>
            </VStack>
           
          </DrawerBody>

          <DrawerFooter>
          <HStack  w={'full'} justifyContent={'space-between'}>
                <Button colorScheme={'purple'} onClick={onClose} ><Link to={"/login"}>Login</Link></Button>
                <Button colorScheme={'purple'} variant={'outline'} onClick={onClose} ><Link to={"/signup"}>SignUp</Link></Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header