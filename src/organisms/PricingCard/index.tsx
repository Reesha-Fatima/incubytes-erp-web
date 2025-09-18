import { ss, useSharedState } from '@helper';
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';

type Props = {
  plan?: any;
  isPopular?: boolean;
  billingCycle?: string;
};

export default function PricingCard({ plan, isPopular, billingCycle }: Props) {
  const [authMode, setAuthMode] = useSharedState(ss.auth_mode);
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <>
      <Card p={0} shadow="lg">
        <Flex
          direction={'column'}
          justify={'space-between'}
          h={!isPopular ? 550 : ''}
          className={
            isPopular
              ? 'brd_primary_theme radius_lg bg_primary_darker'
              : 'brd_primary_theme radius_lg bg_white'
          }
          key={plan.id}
        >
          <div>
            <Box p={15}>
              <Flex justify={'center'} mb={10}>
                <Badge
                  size="xl"
                  radius="sm"
                  variant="light"
                  color={isPopular ? 'var(--primary_lightest)' : ''}
                >
                  {plan.type}
                </Badge>
              </Flex>
              <Stack gap={2} align="center">
                {plan.discount > 0 && (
                  <Text c="dimmed" td="line-through">
                    {billingCycle === 'MONTHLY'
                      ? `$${(
                          plan.monthly_price /
                          (1 - plan.discount / 100)
                        ).toFixed(2)}/mo`
                      : `$${(
                          plan.yearly_price /
                          (1 - plan.discount / 100)
                        ).toFixed(2)}/yr`}
                  </Text>
                )}
                <Title
                  ta="center"
                  order={2}
                  mb={0}
                  className={isPopular ? 'white' : 'black'}
                >
                  {billingCycle === 'monthly'
                    ? `$${plan.monthly_price}/mo`
                    : `$${plan.yearly_price}/yr`}
                </Title>
                {plan.discount > 0 && (
                  <Title
                    order={5}
                    className={isPopular ? 'white' : 'primary'}
                    mb={0}
                  >
                    Save {plan.discount}%
                  </Title>
                )}
              </Stack>
            </Box>
            <Divider className={isPopular ? 'dark_divider_color' : ''} />
            <Box p={15}>
              <Stack>
                <Text
                  fw={700}
                  fz="sm"
                  className={isPopular ? 'white' : 'black'}
                >
                  Features:
                </Text>
                <List
                  spacing={8}
                  size="sm"
                  icon={
                    <ThemeIcon
                      color={isPopular ? 'teal' : 'var(--primary_darker)'}
                      size={18}
                      radius="xl"
                      variant={'filled'}
                    >
                      <IconCheck size={14} stroke={3} className="white" />
                    </ThemeIcon>
                  }
                >
                  <List.Item className={isPopular ? 'white' : 'black'}>
                    Up to {plan.max_invites} invites
                  </List.Item>
                  {plan.modules.map((mod: any, i: number) => (
                    <List.Item
                      key={i}
                      className={isPopular ? 'white' : 'black'}
                    >
                      {mod.name}
                    </List.Item>
                  ))}
                </List>
              </Stack>
            </Box>
          </div>
          <div>
            <Divider className={isPopular ? 'dark_divider_color' : ''} />
            <Box p={15}>
              <Button
                fullWidth
                radius="md"
                size="md"
                fw={600}
                variant={isPopular ? 'white' : 'filled'}
              >
                Get Started
              </Button>
            </Box>
          </div>
        </Flex>
      </Card>
    </>
  );
}
