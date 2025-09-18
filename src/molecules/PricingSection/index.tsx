'use client';

import React, { useMemo, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  List,
  Loader,
  rem,
  SegmentedControl,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconCheck, IconStar } from '@tabler/icons-react';
import styles from './styles.module.scss';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@query';
import { getSubscriptionPlans } from '@services';
import { PricingCard } from '@organisms';

type TypeBillingCycle = 'MONTHLY' | 'YEARLY';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<TypeBillingCycle>('MONTHLY');
  const { data: plansList, isPending: loadingList } = useQuery<any>({
    queryKey: [queryKeys.getSubscriptionPlans],
    queryFn: () => getSubscriptionPlans(),
    select: (res) => res?.data || [],
  });

  if (loadingList) {
    return (
      <Group justify="center" mt="xl">
        <Loader size="lg" />
      </Group>
    );
  }

  return (
    <Box component="section" className="section-padding">
      <Container size="md">
        <Stack gap={8} align="center" ta="center">
          <Badge size="lg" radius="sm">
            Pricing
          </Badge>
          <Title order={2} fw={700}>
            Upgrade to unleash everything
          </Title>
          <Group justify="center">
            <SegmentedControl
              size="md"
              radius="xl"
              value={billingCycle}
              onChange={(value: any) => setBillingCycle(value)}
              data={[
                { label: 'Monthly', value: 'MONTHLY' },
                { label: 'Yearly', value: 'YEARLY' },
              ]}
            />
          </Group>
        </Stack>

        <Grid align="center">
          {[
            ...plansList
              .filter((plan: any) => plan.type !== 'ENTERPRISE')
              .slice(0, 1),
            ...plansList.filter((plan: any) => plan.type === 'ENTERPRISE'),
            ...plansList
              .filter((plan: any) => plan.type !== 'ENTERPRISE')
              .slice(1),
          ].map((plan: any, idx: number) => {
            const isPopular = plan.type === 'ENTERPRISE';

            return (
              <Grid.Col key={plan?.id ?? `${plan?.type ?? 'plan'}-${idx}`}
                        span={{ base: 12, lg: 4 }} px={5}>
                <PricingCard
                  plan={plan}
                  isPopular={isPopular}
                  billingCycle={billingCycle}
                />
              </Grid.Col>
            );
          })}
        </Grid>

        <Text ta={'center'} my={10}>
          No credit card needed  {' '}
          <span className="primary animated-icon">✦</span> Unlimited time on
          Free plan
        </Text>
      </Container>
    </Box>
  );
}
