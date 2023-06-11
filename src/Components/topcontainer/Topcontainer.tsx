"use client"
import { Box, HStack, Heading, Image, Text, Button } from '@chakra-ui/react';
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export default function Topcontainer() {
  return (
  <Box   as="section"
  backgroundImage={"/images/background.webp"}
  backgroundSize="contain"
  backgroundAttachment={"fixed"}
  py="19"
  mt="5">
    {/* left */}
    <HStack>
    <Box w="50%" color={"white"} pl={47 }>
    <Heading fontSize={70}>Build your next idea even faster</Heading>
    <Text lineHeight={"8"}>
    One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
    </Text>
    <Button colorScheme={"blue"} mr={"5"} mt={"5"}>Buy Now </Button>
    <Button colorScheme={"blue"} variant={'outline'} mt={"5"}>view components </Button>
    <AvatarGroup size='md' max={4} mt={"5"}>
 <Avatar name='Zia Kan' src='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' />
 <Avatar name='Adil Altaf' src='https://avatars.githubusercontent.com/u/62209503?v=4' />
 <Avatar name='Owais Ali' src='https://chakrademosite-ows-ali.vercel.app/me.jpg' />
 <Avatar name='Syed Shahab' src='https://avatars.githubusercontent.com/u/97616794?v=4' />
 {/* <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' /> */}
</AvatarGroup>
<Text>created by</Text>
    </Box>
      <Box w={"50%"}>
     <Image src='/images/banner.png'/>
      </Box>
 
 
 
 
 
 


      </HStack>

      </Box>

    

  )
}
