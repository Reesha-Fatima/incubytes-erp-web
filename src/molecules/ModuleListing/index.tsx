import { Box, Container, Grid } from '@mantine/core';
import React from 'react';

export default function ModuleListing() {
  return (
    <>
      <Box component="section" className="section-padding">
        <Container size={'lg'}>
          <Grid>
            <Grid.Col span={{ base: 12, lg: 3 }}></Grid.Col>
            <Grid.Col span={{ base: 12, lg: 3 }}></Grid.Col>
            <Grid.Col span={{ base: 12, lg: 3 }}></Grid.Col>
            <Grid.Col span={{ base: 12, lg: 3 }}></Grid.Col>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
