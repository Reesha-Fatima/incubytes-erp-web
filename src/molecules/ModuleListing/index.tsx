'use client';

import { modules } from '@helper';
import { Carousel } from '@mantine/carousel';
import {
  Box,
  Button,
  Card,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconPointFilled } from '@tabler/icons-react';
import styles from './styles.module.scss';

export default function ModuleListing() {
  return (
    <Box component="section" className="section-padding ">
      <Stack gap={8} align="center" ta="center" mb={20}>
        <Title order={2} fw={700}>
          Explore Modules
        </Title>
        <Text c="var(--body_light)">
          Pick the tools you need. Everything works beautifully together.
        </Text>
      </Stack>
      <Box pos={'relative'}>
        <Box className={styles.bg_radical_left}></Box>
        <Carousel
          withIndicators={false}
          height={400}
          slideSize={{ base: '100%', sm: '50%', lg: '22.3333%' }}
          slideGap="md"
          emblaOptions={{
            loop: true,
            dragFree: false,
            align: 'center',
          }}
        >
          {modules.map((m: any, idx: number) => (
            <Carousel.Slide key={idx}>
              <Card
                radius="lg"
                shadow="sm"
                p="lg"
                h={380}
                withBorder
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: m?.color_light,
                }}
              >
                {/* Top Section */}
                <Stack gap="sm">
                  <ThemeIcon
                    size={48}
                    radius="xl"
                    variant="filled"
                    color={m.color}
                  >
                    {m.icon}
                  </ThemeIcon>

                  <Title order={3}>{m.title2}</Title>
                </Stack>

                {/* Features */}
                <Stack gap="xs" mt="md">
                  <Text fw={600}>Key Features</Text>
                  <List
                    spacing="xs"
                    size="sm"
                    icon={<IconPointFilled size={12} color={'var(--body)'} />}
                  >
                    {m.sub_menus.slice(0, 5).map((menu: any, i: number) => (
                      <List.Item key={i}>{menu.name}</List.Item>
                    ))}
                  </List>
                </Stack>

                <Button variant="filled" size="md" mt={20} fullWidth>
                  Learn More
                </Button>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
        <Box className={styles.bg_radical_right}></Box>
      </Box>
    </Box>
  );
}
