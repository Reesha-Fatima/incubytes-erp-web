"use client";

import React from 'react';
import { Accordion, Box, Card, Container, Stack, Text, Title, Badge } from '@mantine/core';
import styles from './styles.module.scss';

const faqs = [
  {
    q: 'Can I pick only the modules I need?',
    a: 'Yes. Enable the modules you need and add more anytime. Everything shares the same data layer so it stays in sync.',
  },
  {
    q: 'Do you offer monthly and yearly billing?',
    a: 'Both are available. Yearly plans include a discount and consolidated invoicing.',
  },
  {
    q: 'Is onboarding support included?',
    a: 'All paid plans include guided onboarding. Enterprise plans include dedicated success managers.',
  },
  {
    q: 'How secure is my data?',
    a: 'Data is encrypted at rest and in transit. Role-based access control and audit logs are included.',
  },
];

export default function FAQ() {
  return (
    <Box component="section" className={`section-padding ${styles.faqSection}`}>
      <Container size="md">
        <Stack gap={8} align="center" ta="center" mb={20}>
          <Badge size="lg" radius="sm">FAQ</Badge>
          <Title order={2} fw={700}>Frequently asked questions</Title>
          <Text c="var(--body_light)">Everything you need to know to get started</Text>
        </Stack>

        <div className={styles.faqWrap}>
          <Card withBorder radius="lg" className={styles.card}>
            <Accordion radius="md" variant="default">
          {faqs.map((f, i) => (
            <Accordion.Item key={i} value={`faq-${i}`}>
              <Accordion.Control className={styles.control}>{f.q}</Accordion.Control>
              <Accordion.Panel className={styles.panel}>
                <Text>{f.a}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
            </Accordion>
          </Card>
        </div>
      </Container>
    </Box>
  );
}
