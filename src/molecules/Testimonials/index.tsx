'use client';

import React from 'react';
import {
  Box,
  Card,
  Container,
  Stack,
  Text,
  Title,
  Avatar,
  Rating,
  Badge,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import styles from './styles.module.scss';
import classNames from 'classnames';

const testimonials = [
  {
    name: 'Aisha Khan',
    role: 'COO, NovaWorks',
    quote:
      'Integrations were painless and support is excellent. Highly recommended.',
    initials: 'AK',
    rating: 5,
  },
  {
    name: 'Ryan Carter',
    role: 'Head of Operations, NorthBay',
    quote:
      'The modules click together perfectly. We scaled to 300+ users without a hiccup.',
    initials: 'RC',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Director, HexaLabs',
    quote:
      'Dashboards are clean and actionable. Our monthly close is 3x faster now.',
    initials: 'PN',
    rating: 4,
  },
  {
    name: 'Luis Fernandez',
    role: 'IT Manager, AeroTech',
    quote:
      'Integrations were painless and support is excellent. Highly recommended.',
    initials: 'LF',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Box
      component="section"
      className={`section-padding ${styles.testimonialsSection}`}
    >
      <Container size="lg">
        {/* Header */}
        <Stack
          gap={8}
          align="center"
          ta="center"
          mb={20}
          className={styles.sectionHeader}
        >
          <Badge size="lg" radius="sm">
            Testimonials
          </Badge>
          <Title order={2} fw={700}>
            Loved by modern teams
          </Title>
          <Text className={styles.mutedText}>
            Real stories from teams growing faster with our platform
          </Text>
        </Stack>

        {/* Fade Overlays */}
        <Box className={styles.glowLeft} />
        <Box className={styles.glowRight} />

        {/* Carousel */}
        <Carousel
          withIndicators
          height={350}
          slideSize={{ base: '100%', sm: '50%', lg: '33.3333%' }}
          slideGap="md"
        >
          {testimonials.map((t, i) => (
            <Carousel.Slide key={`${t.name}-${i}`} className={styles.slide}>
              <div className={styles.cardWrap}>
                <Card
                  radius="lg"
                  shadow="sm"
                  p={28}
                  withBorder
                  className={styles.card}
                >
                  <span
                    className={classNames(
                      'primary_gradient_text',
                      styles.quoteMark
                    )}
                  >
                    “
                  </span>

                  <Stack gap={14} align="center">
                    <div className={styles.avatarInline}>
                      <span
                        className={classNames(styles.avatarRing, 'bg_white')}
                      >
                        <Avatar
                          radius="xl"
                          size="lg"
                          src={`https://i.pravatar.cc/150?img=${i + 1}`}
                          alt={t.name}
                        />
                      </span>
                    </div>

                    <Rating
                      readOnly
                      defaultValue={t.rating}
                      className={styles.rating}
                    />

                    <Text fw={700} ta="center" className={styles.name}>
                      {t.name}
                    </Text>
                    <Text size="sm" ta="center" className={styles.role}>
                      {t.role}
                    </Text>
                    <Text ta="center" className={styles.quoteText}>
                      {t.quote}
                    </Text>

                    <div className={styles.accentBar}></div>
                  </Stack>
                </Card>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
