"use client";

import React from 'react';
import Slider from 'react-slick';
import { Box, Card, Container, Group, Stack, Text, Title, Avatar, Rating, Badge } from '@mantine/core';
import styles from './styles.module.scss';

const testimonials = [
  {
    name: 'Aisha Khan',
    role: 'COO, NovaWorks',
    quote:
      'We replaced five separate tools with this platform. Reporting and approvals are finally streamlined for our team.',
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
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  } as const;

  return (
    <Box component="section" className={`section-padding ${styles.testimonialsSection}`}>
      <Container size="lg">
        <Stack gap={8} align="center" ta="center" mb={20}>
          <Badge size="lg" radius="sm">Testimonials</Badge>
          <Title order={2} fw={700}>Loved by modern teams</Title>
          <Text c="var(--body_light)">Real stories from teams growing faster with our platform</Text>
        </Stack>
        <Box className={styles.glowLeft} />
        <Box className={styles.glowRight} />

        <div className="testimonial_Slider">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={`${t.name}-${i}`} className={styles.slide}>
                <div className={styles.cardWrap}>
                  <Card radius="lg" shadow="sm" p={22} className={`${styles.card} bg_white`}>
                    <div className={styles.quoteMark}>“”</div>
                    <Stack gap={14}>
                      <Rating readOnly defaultValue={t.rating} />
                      <Text size="lg">{`“${t.quote}”`}</Text>
                      <div className={styles.userRow}>
                        <div className={styles.avatarRing}>
                          <Avatar radius="xl" variant="filled" className="bg_primary white">{t.initials}</Avatar>
                        </div>
                        <Stack gap={0}>
                          <Text fw={600}>{t.name}</Text>
                          <Text c="var(--body_light)" size="sm">{t.role}</Text>
                        </Stack>
                      </div>
                    </Stack>
                  </Card>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Box>
  );
}
