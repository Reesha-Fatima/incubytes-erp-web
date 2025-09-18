"use client";

import React from 'react';
import Slider from 'react-slick';
import { Box, Card, Container, Group, Stack, Text, Title, Avatar, Rating, Badge, Divider } from '@mantine/core';
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
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, centerMode: false } },
      { breakpoint: 992, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
    ],
  } as const;

  return (
    <Box component="section" className={`section-padding ${styles.testimonialsSection}`}>
      <Container size="lg">
        <Stack gap={8} align="center" ta="center" mb={20} className={styles.sectionHeader}>
          <Badge size="lg" radius="sm">Testimonials</Badge>
          <Title order={2} fw={700}>Loved by modern teams</Title>
          <Text className={styles.mutedText}>Real stories from teams growing faster with our platform</Text>
        </Stack>
        <Box className={styles.glowLeft} />
        <Box className={styles.glowRight} />

        <div className={`testimonial_Slider ${styles.sliderRoot}`}>
          <Slider {...settings} aria-label="Customer testimonials slider">
            {testimonials.map((t, i) => (
              <div key={`${t.name}-${i}`} className={`${styles.slide} ${styles.testimonialItem}`}>
                <div className={styles.cardOuter}>
                  <Card radius="lg" shadow="sm" p={28} className={`${styles.card} bg_white`}>
                    <Stack gap={12} align="center">
                      <div className={styles.avatarInline}>
                        <span className={styles.avatarRing}>
                          <Avatar radius="xl" variant="filled" className="bg_primary white" size="lg">{t.initials}</Avatar>
                        </span>
                      </div>
                      <Rating readOnly defaultValue={t.rating} className={styles.rating} />
                      <Text fw={700} ta="center" className={styles.name}>{t.name}</Text>
                      <Text size="sm" ta="center" className={styles.role}>{t.role}</Text>
                      <Text ta="center" className={styles.quoteText}>{`“${t.quote}”`}</Text>
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
