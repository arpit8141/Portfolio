import React from 'react'
import { Image } from '@chakra-ui/react'
import ProfileImage from './../Images/ProfileImage.jpg'
import { Box, Card, Stack, CardFooter, CardBody, Heading, Text } from '@chakra-ui/react'


function Profile() {
    return (
        <Box>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '250px' }}
                    src={ProfileImage}
                    alt='Profile Image'
                />
                <Stack>
                    <CardBody >
                        <Heading size='md' textAlign='left'>Arpit Vaghela</Heading>
                        <Text py='2'>
                            "The only way to do great work is to Love what you do !"
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