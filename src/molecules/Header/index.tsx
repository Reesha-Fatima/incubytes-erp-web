'use client';
import { Button, Container, Flex, Grid, Text, Image, Box } from '@mantine/core';
import classNames from 'classnames';
import Link from 'next/link';

import { images } from '@assets';

export default function Header() {
  const nav = [
    { name: 'Products', slug: '/' },
    { name: 'Solutions', slug: '/' },
    { name: 'Resources', slug: '/' },
    { name: 'Pricing', slug: '/' },
    { name: 'Support', slug: '/' },
  ];

  return (
    <Box component="section" py={15}>
      <Container size={'lg'} className="nopadding">
        <Grid align="center" justify="center">
          <Grid.Col span={{ base: 4, lg: 1.8 }} order={{ base: 1, lg: 1 }}>
            <div>
              <Image src={images.logo} alt="logo" width={80} height={40} />
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 0, lg: 7.5 }} order={{ base: 3, lg: 2 }}>
            <Flex gap={20} justify={'center'}>
              {nav.map((menu, i) => {
                return (
                  <div>
                    <Link href={menu.slug} className="nodecoration">
                      <Text fz={'16px'} lts={1} className="black">
                        {menu.name}
                      </Text>
                    </Link>
                  </div>
                );
              })}
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 8, lg: 2.7 }} order={{ base: 2, lg: 3 }}>
            <Flex gap={10} align={'center'} justify={'flex-end'}>
              <Link href={'/auth/login'}>
                <Button className="bg-primary" size="lg" variant="outline">
                  Contact Sales
                </Button>
              </Link>
              <Link href={'/auth/signup'}>
                <Button size="lg" variant="filled">
                  Get Started
                </Button>
              </Link>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
