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
    name: "Free",
    tagline: "Free plan for all users.",
    monthly: 0,
    yearly: 0,
    cta: "Get Started",
    featured: false,
    bgClass: "bgSoft1",
    features: [
      "2 Workspaces",
      "10 collaborators",
      "Unlimited data",
      "Unified Analytics",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Ideal for small businesses.",
    monthly: 15,
    yearly: 150,
    cta: "Get Started",
    featured: true,
    bgClass: "bgSoft2",
    features: [
      "Unlimited workspaces",
      "Unlimited collaboration",
      "15 GB data storage",
      "Unified Analytics",
      "Mobile app access",
    ],
  },
  {
    key: "enterprise",
    name: "Business",
    tagline: "Works best for enterprise companies.",
    monthly: 25,
    yearly: 250,
    cta: "Get Started",
    featured: false,
    bgClass: "bgSoft3",
    features: [
      "Unlimited workspaces",
      "Unlimited collaboration",
      "15 GB data storage",
      "Unified Analytics",
      "Mobile app access",
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
                withBorder={false}
                radius="lg"
                shadow={plan.featured ? "md" : "sm"}
                className={`${styles.planCard} ${plan.featured ? styles.planCardFeatured : ""}`}
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
                  <Text className={styles.cycle}>/{billing === "monthly" ? "month" : "year"}</Text>
                </Flex>

                <Button
                  fullWidth
                  mt={16}
                  size="md"
                  variant="default"
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
