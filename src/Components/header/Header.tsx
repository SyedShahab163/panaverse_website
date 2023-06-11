'use client'
import { Box, Button, Center, Flex, HStack, Heading,   Image,   List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'


export default function page() {
  return(<>
    <Box pt={5}>
      {/* left */}
      <Flex justifyContent={'space-around'} alignItems={'Center'}>
      <Box>
        <HStack>
<Image src='/images/Logo.webp'/>
 <List>
  <HStack align={'center'} spacing={10} fontWeight="bold" ml="40px">
  <ListItem>Home</ListItem>
  <ListItem>About</ListItem>
  <ListItem>Contact</ListItem>
  </HStack>
 </List>
 </HStack>
      </Box>
      {/* right */}
      <Box>
      <SearchIcon w={25} h={25} />
      <Button variant={'outline'}>Go To Piaic</Button>
      </Box>
      </Flex>
    </Box>
    
    </>
  )
}


