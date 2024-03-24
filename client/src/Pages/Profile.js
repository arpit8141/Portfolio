import React from 'react'
import { Box } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Heading, Text } from '@chakra-ui/react'
function Profile() {
    return (
        <Box>
            <Card>
                <CardBody>
                    <CardHeader>
                        <Heading size='md'>Arpit Vaghela</Heading>
                    </CardHeader>
                    <Text>This is my profile!</Text>
                </CardBody>
            </Card>
        </Box>
    )
}

export default Profile