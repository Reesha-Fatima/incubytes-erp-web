"use client";

import React, { useMemo, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  List,
  rem,
  SegmentedControl,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck, IconStar } from "@tabler/icons-react";
import styles from "./styles.module.scss";

type BillingCycle = "monthly" | "yearly";

const plans = [
  {
    key: "starter",
    name: "Starter",
    tagline: "For individuals and trials",
    monthly: 0,
    yearly: 0,
    cta: "Get Started",
    featured: false,
    features: [
      "1 user",
      "Basic modules",
      "Community support",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Best for growing teams",
    monthly: 19,
    yearly: 190,
    cta: "Upgrade to Pro",
    featured: true,
    features: [
      "Up to 10 users",
      "All core modules",
      "Priority support",
      "Advanced reports",
    ],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    tagline: "Custom needs & scale",
    monthly: 49,
    yearly: 490,
    cta: "Contact Sales",
    featured: false,
    features: [
      "Unlimited users",
      "Custom modules",
      "Dedicated manager",
      "SLA & SSO",
    ],
  },
] as const;

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  const subtitle = useMemo(
    () =>
      billing === "yearly"
        ? "Save 2 months with yearly billing"
        : "Switch to yearly and save",
    [billing]
  );

  const renderPrice = (p: typeof plans[number]) =>
    billing === "monthly" ? p.monthly : p.yearly;

  return (
    <Box component="section" className={styles.pricingSection}>
      <Container size="md">
        <Stack gap={8} align="center" ta="center" className={styles.headerWrap}>
          <Badge size="lg" radius="sm" className={styles.sectionBadge}>
            Pricing
          </Badge>
          <Text component="h2" fw={700} className={styles.sectionTitle}>
            Simple, transparent plans
          </Text>
          <Text className={styles.sectionSubtitle}>{subtitle}</Text>

          <SegmentedControl
            value={billing}
            onChange={(v) => setBilling(v as BillingCycle)}
            data={[
              { label: "Monthly", value: "monthly" },
              { label: "Yearly", value: "yearly" },
            ]}
            radius="xl"
            className={styles.billingToggle}
          />
        </Stack>

        <Grid mt={30} gutter={20} align="stretch">
          {plans.map((plan) => (
            <Grid.Col key={plan.key} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                withBorder
                radius="lg"
                shadow={plan.featured ? "md" : "sm"}
                className={
                  plan.featured ? `${styles.planCard} ${styles.planCardFeatured}` : styles.planCard
                }
              >
                {plan.featured && (
                  <Group gap={6} className={styles.featuredBadge}>
                    <IconStar size={16} />
                    <Text fw={600} fz={12}>Most popular</Text>
                  </Group>
                )}

                <Stack gap={6}>
                  <Text fw={700} className={styles.planName}>
                    {plan.name}
                  </Text>
                  <Text className={styles.planTagline}>{plan.tagline}</Text>
                </Stack>

                <Flex align="baseline" gap={6} mt={14} className={styles.priceRow}>
                  <Text className={styles.currency}>$</Text>
                  <Text className={styles.price}>{renderPrice(plan)}</Text>
                  <Text className={styles.cycle}>/{billing === "monthly" ? "mo" : "yr"}</Text>
                </Flex>

                <Button
                  fullWidth
                  mt={16}
                  size="md"
                  variant={plan.featured ? "filled" : "default"}
                  className={styles.ctaButton}
                >
                  {plan.cta}
                </Button>

                <List mt={18} spacing={10} className={styles.featureList}
                  icon={
                    <ThemeIcon size={22} radius="xl" className={styles.checkIcon}>
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  {plan.features.map((f, idx) => (
                    <List.Item key={idx} className={styles.featureItem}>
                      {f}
                    </List.Item>
                  ))}
                </List>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        <Text ta="center" mt={20} className={styles.noteText}>
          No credit card needed. Unlimited time on Free plan.
        </Text>
      </Container>
    </Box>
  );
}
