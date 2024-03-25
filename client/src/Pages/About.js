import React from 'react'
import './../Styles/About.css'
import { Box, Card, Stack, CardBody, Text, Heading, StackDivider } from '@chakra-ui/react'

function About() {
    return (
        <Box textAlign='left'>
            <Card>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Full Name
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Vaghela Arpitkumar Josephbhai
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Languages
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                English,Hindi,Gujrati
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Technical skills
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                React, Dot net, TypeScript, JavaScript, SPFX, MySQL, C#
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Hobbies
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Reading, Music, Football
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}

export { About };