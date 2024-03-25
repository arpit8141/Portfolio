import React from 'react'
import { Box, Card, Stack, CardBody, Text, Heading, StackDivider } from '@chakra-ui/react'

function Project() {
    return (
        <Box textAlign='left'>
            <Card>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Job-hub (Mca-Sem-3)
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                As a mini project a website that allows user to register an look for job opportunities
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                We used PHP as back-end and HTML,CSS,JavaScript for front-end.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Online Bus Booking (BCA-sem-6)
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                A system that provides booking tickets for buses online having three modules Admin,User,Staff.
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                Me and my partner designed a system using HTML,CSS,JavaScript as font-end and PHP as back-end.
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                The system allows user to book ticket, cancel ticket and a user profile to viev previously booked tickets.
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}

export { Project };