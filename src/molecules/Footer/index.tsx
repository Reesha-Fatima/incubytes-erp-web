'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Anchor,
  ActionIcon,
  Divider,
} from '@mantine/core';
import { images, icons } from '@assets';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  'Projects',
  'Leads',
  'Campaigns',
  'HRMS',
  'Accounts',
  'Invoices',
];
const resources = ['Docs', 'Blog', 'Support', 'API Status'];
const company = ['About', 'Careers', 'Contact', 'Privacy'];

export default function Footer() {
  return (
    <Box component="footer" className="bg_primary_darkest" pt={40} pb={20}>
      <Container size="lg">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap={10}>
              <Box w={180} h={50}>
                <Image
                  src={images.logo}
                  style={{ filter: 'brightness(0) invert(1)' }}
                  alt="logo"
                  width={200}
                  height={100}
                />
              </Box>
              <Text c="var(--white)">
                Operate and scale on one modern platform.
              </Text>
              {/* <Group gap={10}>
                <ActionIcon
                  variant="subtle"
                  radius="xl"
                  component={Link}
                  href="#"
                >
                  <Image src={icons.facebook} alt="facebook" />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  radius="xl"
                  component={Link}
                  href="#"
                >
                  <Image src={icons.x} alt="x" />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  radius="xl"
                  component={Link}
                  href="#"
                >
                  <Image src={icons.linkedin} alt="linkedin" />
                </ActionIcon>
              </Group> */}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 2 }}>
            <Text fw={700} c="var(--white)" mb={8}>
              Products
            </Text>
            <Stack gap={6}>
              {products.map((p) => (
                <Anchor
                  key={p}
                  component={Link}
                  href="#"
                  c="var(--primary_lighter)"
                >
                  {p}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 3 }}>
            <Text fw={700} c="var(--white)" mb={8}>
              Resources
            </Text>
            <Stack gap={6}>
              {resources.map((p) => (
                <Anchor
                  key={p}
                  component={Link}
                  href="#"
                  c="var(--primary_lighter)"
                >
                  {p}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Text fw={700} c="var(--white)" mb={8}>
              Company
            </Text>
            <Stack gap={6}>
              {company.map((p) => (
                <Anchor
                  key={p}
                  component={Link}
                  href="#"
                  c="var(--primary_lighter)"
                >
                  {p}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my={20} className="dark_divider_color" />
        <Group justify="space-between">
          <Text size="sm" c="var(--primary_lighter)">
            © {new Date().getFullYear()} All rights reserved.
          </Text>
          <Group gap={12}>
            <Anchor component={Link} href="#" c="var(--primary_lighter)">
              Terms
            </Anchor>
            <Anchor component={Link} href="#" c="var(--primary_lighter)">
              Privacy
            </Anchor>
            <Anchor component={Link} href="#" c="var(--primary_lighter)">
              Security
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
