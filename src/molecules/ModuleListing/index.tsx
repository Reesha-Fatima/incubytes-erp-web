import { Box, Card, Container, Grid, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import React from 'react';
import {
  IconLayoutKanban,
  IconChartLine,
  IconSpeakerphone,
  IconUsersGroup,
  IconChartPie,
  IconFileInvoice,
  IconBuildingStore,
  IconShoppingCart,
  IconCoin,
  IconTicket,
  IconFile,
} from '@tabler/icons-react';

const modules = [
  {
    icon: IconLayoutKanban,
    name: 'Project Management',
    desc: 'Plan, track, and deliver projects with boards, sprints, and timelines.',
  },
  {
    icon: IconChartLine,
    name: 'Leads CRM',
    desc: 'Capture, qualify, and nurture leads with pipeline automation.',
  },
  {
    icon: IconSpeakerphone,
    name: 'Campaigns',
    desc: 'Run multi-channel campaigns with performance analytics.',
  },
  {
    icon: IconUsersGroup,
    name: 'HRMS',
    desc: 'Manage employees, attendance, payroll, and reviews in one place.',
  },
  {
    icon: IconChartPie,
    name: 'Accounts',
    desc: 'Monitor cash flow, P&L, and balance sheets with ease.',
  },
  {
    icon: IconFileInvoice,
    name: 'Invoices',
    desc: 'Create, send, and reconcile invoices with reminders.',
  },
  {
    icon: IconBuildingStore,
    name: 'Stores',
    desc: 'Track stock levels and transfers across locations.',
  },
  {
    icon: IconShoppingCart,
    name: 'Orders',
    desc: 'Process orders with fulfillment and delivery status.',
  },
  {
    icon: IconCoin,
    name: 'Payrolls',
    desc: 'Automate payroll with compliance-ready reports.',
  },
  {
    icon: IconTicket,
    name: 'Tickets',
    desc: 'Resolve customer issues with SLAs and automations.',
  },
  {
    icon: IconFile,
    name: 'Files',
    desc: 'Organize and collaborate on documents securely.',
  },
];

export default function ModuleListing() {
  return (
    <Box component="section" className="section-padding">
      <Container size="lg">
        <Stack gap={8} align="center" ta="center" mb={20}>
          <Group gap={8}>
            <Title order={2} fw={700}>Explore Modules</Title>
          </Group>
          <Text c="var(--body_light)">Pick the tools you need. Everything works beautifully together.</Text>
        </Stack>

        <Grid gutter={16}>
          {modules.map((m, idx) => (
            <Grid.Col key={idx} span={{ base: 12, sm: 6, lg: 4 }} px={5}>
              <Card withBorder radius="lg" shadow="sm" p={18} className="bg_white">
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon
                    size={48}
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: 'var(--primary)', to: 'var(--primary_darker)', deg: 200 }}
                  >
                    <m.icon className="white" size={24} />
                  </ThemeIcon>
                  <Stack gap={6}>
                    <Title order={4}>{m.name}</Title>
                    <Text c="var(--body_light)" size="sm">{m.desc}</Text>
                  </Stack>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
