import { Box, Button, Container, Flex, Text, Title } from '@mantine/core';
import React from 'react';

export default function HeroBanner() {
  return (
    <Box component="section" className="section-padding">
      <Container size={'sm'}>
        <Title order={1} ta={'center'} mb={10}>
          6 Enterprise Resource Management
        </Title>
        <Text ta={'center'} size="xl">
          Manage all your business activities on one platform with customizable
          features that scale with your needs.
        </Text>
        <Flex justify={'center'} gap={10} mt={15}>
          <Button size="lg" variant="filled">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </Flex>
        <Text ta={'center'} my={10}>
          No credit card needed  {' '}
          <span className="primary animated-icon">✦</span> Unlimited time on
          Free plan
        </Text>
      </Container>
    </Box>
  );
}
