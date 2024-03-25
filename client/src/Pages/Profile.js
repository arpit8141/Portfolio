import React from 'react'
import { Image } from '@chakra-ui/react'
import ProfileImage from './../Images/ProfileImage.jpg'
import { Box, Card, Stack, CardFooter, CardBody, Heading, Text } from '@chakra-ui/react'


function Profile() {
    return (
        <Box >
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            // backgroundColor='#99775C'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '250px' }}
                    src={ProfileImage}
                    alt='Profile Image'
                />
                <Stack>
                    <CardBody textAlign='left'>
                        <Heading size='md' >Arpit Vaghela</Heading>
                        <Text py='2'>
                            I seek challenging opportunities where I can fully use my skills for the success of the organization.
                        </Text>
                    </CardBody>
                    <CardFooter>
                    </CardFooter>
                </Stack>
            </Card>
        </Box>
    )
}

export { Profile };