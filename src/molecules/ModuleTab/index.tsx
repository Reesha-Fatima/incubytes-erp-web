'use client';

import React, { useState } from 'react';
import {
  ActionIcon,
  Box,
  Card,
  Container,
  Flex,
  Image,
  Text,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import styles from './styles.module.scss';
import {
  IconBuildingStore,
  IconChartLine,
  IconChartPie,
  IconCoin,
  IconFile,
  IconFileInvoice,
  IconLayoutKanban,
  IconPresentation,
  IconShoppingCart,
  IconSpeakerphone,
  IconTicket,
  IconUsersGroup,
} from '@tabler/icons-react';
import { images } from '@assets';

export default function ModuleTab() {
  const [activeModule, setActiveModule] = useState('Project');
  const [embla, setEmbla] = useState<any>(null);
  const module = [
    { icon: IconLayoutKanban, name: 'Project' },
    { icon: IconChartLine, name: 'Leads' },
    { icon: IconSpeakerphone, name: 'Campaigns' },
    { icon: IconUsersGroup, name: 'HRMS' },
    { icon: IconChartPie, name: 'Accounts' },
    { icon: IconFileInvoice, name: 'Invoices' },
    { icon: IconBuildingStore, name: 'Stores' },
    { icon: IconShoppingCart, name: 'Orders' },
    { icon: IconCoin, name: 'Payrolls' },
    { icon: IconTicket, name: 'Tickets' },
    { icon: IconFile, name: 'Files' },
  ];
  const handleSelect = (name: string, index: number) => {
    setActiveModule(name);
    if (embla) {
      embla.scrollTo(index, true);
    }
  };

  return (
    <Box component="section" className={styles.moduleTabs}>
      <Container size="md" pos={'relative'}>
        <Box className={styles.bg_radical_left}></Box>
        <Carousel
          slideSize="12%"
          slideGap="md"
          withControls={false}
          getEmblaApi={setEmbla}
          emblaOptions={{
            loop: true,
            dragFree: true,
            align: 'center',
          }}
        >
          {module.map((item, i) => (
            <Carousel.Slide key={i}>
              <Flex direction="column" align="center" px={8}>
                <Card p={0} withBorder shadow="sm" radius="lg">
                  <ActionIcon
                    size={item?.name === activeModule ? 85 : 70}
                    variant={item?.name === activeModule ? 'filled' : 'white'}
                    onClick={() => handleSelect(item.name, i)}
                    className={
                      item?.name === activeModule ? styles.activeTab : ''
                    }
                  >
                    <item.icon size={30} />
                  </ActionIcon>
                </Card>
                <Text mt={5}>{item.name}</Text>
              </Flex>
            </Carousel.Slide>
          ))}
        </Carousel>
        <Box className={styles.bg_radical_right}></Box>

        <Card withBorder p={0} mt={30}>
          <Image
            src={images.projects}
            alt="projects"
            w={'100%'}
            height={500}
            className={styles.activeModule_img}
          />
        </Card>
      </Container>
    </Box>
  );
}
