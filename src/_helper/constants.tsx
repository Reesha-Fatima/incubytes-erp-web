import {
  IconAddressBook,
  IconArchive,
  IconArrowBackUp,
  IconArrowsExchange,
  IconBasket,
  IconBuilding,
  IconBuildingStore,
  IconCalendarEvent,
  IconCalendarStats,
  IconCalendarTime,
  IconCash,
  IconCategory,
  IconCategory2,
  IconChartBar,
  IconChartLine,
  IconClock,
  IconCreditCard,
  IconDiscount2,
  IconFileDollar,
  IconFileInvoice,
  IconFileIsr,
  IconFilePlus,
  IconFileText,
  IconFolders,
  IconLayoutDashboard,
  IconLifebuoy,
  IconLockAccess,
  IconMail,
  IconMapPin,
  IconMoneybag,
  IconPackage,
  IconPdf,
  IconPhoto,
  IconPlus,
  IconRepeat,
  IconReport,
  IconReportAnalytics,
  IconReportMoney,
  IconRosetteDiscountCheck,
  IconSchool,
  IconSearch,
  IconSettings2,
  IconSettingsAutomation,
  IconShare,
  IconShip,
  IconSparkles,
  IconStars,
  IconTags,
  IconTemplate,
  IconTicket,
  IconTrash,
  IconTruckDelivery,
  IconUpload,
  IconUserCheck,
  IconUserHexagon,
  IconUsers,
  IconUserSquare,
  IconUserStar,
  IconVersions,
  IconVideo,
  IconWallet,
} from '@tabler/icons-react';
import { hexToRgba } from './colors';

export const ss = {
  auth_mode: 'auth_mode',
  sidebar: 'sidebar',
  userData: 'userData',
  admin: 'admin',
  token: 'token',
  toast: 'toast',
};

export const modal = {
  filterDrawer: 'filterDrawer',
  inviteModal: 'inviteModal',
  paymentModal: 'paymentModal',
  registerModal: 'registerModal',
  leadModalForm: 'leadModalForm',
  eventModalForm: 'eventModalForm',
  orderModal: 'orderModal',
  callModal: 'callModal',
  editModal: 'editModal',
  complainModal: 'complainModal',
  confirmMatchMaker: 'confirmMatchMaker',
  consultationModal: 'consultationModal',
  builderModal: 'builderModal',
};

export const colors = {
  primary: '#5812cb',
  primary_lightest: '#f0f3f9',
  primary_lighter: '#d9e0ec',
  primary_light: '#afb8c4',
  primary_darker: '#2e086d',
  primary_darkest: '#14032f',
  primary_dark: '#40099b',
  primary_border: '#d9e0ec',
  secondary: '#ff5500',
  secondary_lightest: '#fff4ea',
  secondary_lighter: '#f0e2d5',
  secondary_light: '#e4d1bf',
  body: '#070112',
  white: '#ffffff',
  body_light: '#7e7391',
  success: '#00bc56',
  error: '#d50040',
  // Lead
  NEW: '#1E90FF',
  CONTACTED: '#00BFFF',
  INTERESTED: '#32CD32',
  QUALIFIED: '#FFD700',
  PROPOSAL_SENT: '#FF8C00',
  NEGOTIATION: '#FF4500',
  CLOSED_WON: '#6A5ACD',
  CLOSED_LOST: '#DC143C',
  UNQUALIFIED: '#A9A9A9',
  FOLLOW_UP: '#20B2AA',
  IN_PROGRESS: '#4682B4',
  REOPENED: '#8A2BE2',
  NOT_INTERESTED: '#FF6347',
  DUPLICATE: '#808080',
  todo: '#536cd2',
  in_progress: '#FFD700',
  done: '#32CD32',
  blocked: '#FF6347',
  on_hold: '#FFA500',
  canceled: '#A9A9A9',
  online: '#5812cb',
  offline: '#ff5500',
  indigo: '#4B0082',
  steelBlue: '#4682B4',
  slateBlue: '#6A5ACD',
  seaGreen: '#2E8B57',
  tomato: '#FF6347',
  saddleBrown: '#8B4513',
  chocolate: '#D2691E',
  lightSeaGreen: '#20B2AA',
  slateGray: '#708090',
  indianRed: '#CD5C5C',
  goldenrod: '#DAA520',
  cadetBlue: '#5F9EA0',
  sienna: '#A0522D',
  darkGoldenrod: '#B8860B',
  darkSeaGreen: '#8FBC8F',
  mediumPurple: '#9370DB',
};

export const main_navigation: any = [
  {
    title: 'Manage',
    title2: 'Vendors',
    color_light: hexToRgba('#1edbf3', 0.15),
    icon: <IconBuildingStore className={'primary_darker'} />,
  },
  {
    title: 'Manage',
    title2: 'Customers',
    color_light: hexToRgba('#1edbf3', 0.15),
    icon: <IconUsers className={'primary_darker'} />,
  },
  {
    title: 'Manage',
    title2: 'Order',
    color_light: hexToRgba('#1edbf3', 0.15),
    icon: <IconBasket className={'primary_darker'} />,
  },
  {
    title: 'Manage',
    title2: 'Transactions',
    color_light: hexToRgba('#1edbf3', 0.15),
    icon: <IconWallet className={'primary_darker'} />,
  },

  {
    title: 'Manage',
    title2: 'Menus',
    color_light: hexToRgba('#1edbf3', 0.15),
    icon: <IconCategory2 className={'primary_darker'} />,
  },
  {
    title: 'Manage',
    title2: 'Reviews',
    color_light: hexToRgba('#1edbf3', 0.15),
    icon: <IconStars className={'primary_darker'} />,
  },
];

export const modules: any = [
  {
    hide_default: false,
    title2: 'AI Hiring Suite',
    color: '#911ef3',
    color_light: hexToRgba('#911ef3', 0.15),
    icon: <IconSparkles color="#fff" />,
    sub_menus: [
      {
        name: 'Applicants Collection',
        Icon: <IconPdf />,
        desc: 'Upload candidate resumes',
      },
      {
        name: 'Resume Processing',
        Icon: <IconFileText />,
        desc: 'AI-powered resume parsing and analysis',
      },
      {
        name: 'Candidate Shortlisting',
        Icon: <IconUserCheck />,
        desc: 'Automated candidate scoring and ranking',
      },
      {
        name: 'Interview Scheduling',
        Icon: <IconCalendarEvent />,
        desc: 'Schedule interviews with shortlisted candidates',
      },
      {
        name: 'AI Video Interview',
        Icon: <IconVideo />,
        desc: 'AI agent conducts video interviews',
      },
      {
        name: 'Result Generation',
        Icon: <IconChartBar />,
        desc: 'Generate detailed interview analysis',
      },
      {
        name: 'HR Report Sharing',
        Icon: <IconReportAnalytics />,
        desc: 'Share comprehensive reports with HR',
      },
      {
        name: 'Final Decision',
        Icon: <IconUserStar />,
        desc: 'HR makes final hiring decision',
      },
    ],
  },
  {
    title: 'Manage',
    title2: 'Projects',
    color: '#1edbf3',
    disable: false,
    color_light: hexToRgba('#1edbf3', 0.15),
    icon: <IconSettings2 color="#fff" />,
    sub_menus: [
      {
        name: 'Project Dashboard',
        icon: IconLayoutDashboard,
      },
      {
        name: 'Create New Project',
        icon: IconPlus,
      },
      {
        name: 'Sprints',
        icon: IconCalendarStats,
      },
      {
        name: 'Work Items',
        icon: IconCalendarStats,
      },
      {
        name: 'Backlogs',
        icon: IconCalendarStats,
      },
      {
        name: 'Analytics',
        icon: IconCalendarStats,
      },
    ],
  },
  {
    title: 'Manage',
    title2: 'Leads',
    disable: false,
    color: '#33df40',
    color_light: hexToRgba('#33df40', 0.15),
    icon: <IconRosetteDiscountCheck color="#fff" />,
    sub_menus: [
      {
        name: 'Dashboard',
        icon: IconLayoutDashboard,
      },
      { name: 'Browse Leads', icon: IconSearch },
      { name: 'Add New Lead', icon: IconPlus },
      { name: 'Lead Customers', icon: IconUsers },
    ],
  },
  {
    title: 'Manage',
    title2: 'Campaigns',
    disable: false,
    color: '#f8a900',
    color_light: hexToRgba('#f8a900', 0.15),
    icon: <IconTags color="#fff" />,
    sub_menus: [
      {
        name: 'Campaign Dashboard',

        icon: IconLayoutDashboard,
      },
      {
        name: 'Create New Campaign',

        icon: IconPlus,
      },
      {
        name: 'Campaign Templates',

        icon: IconTemplate,
      },
      // Future / disabled
      // { name: 'Audience Targeting', disable: true, icon: IconUsersGroup },
      // { name: 'Campaign Scheduling', disable: true, icon: IconCalendarEvent },
      {
        name: 'Budget Allocation',

        icon: IconCash,
      },
      // Future / disabled
      // { name: 'Multi-Channel Campaigns', disable: true, icon: IconUsersGroup },
      {
        name: 'Email Marketing',

        icon: IconMail,
      },
      // Future / disabled
      // { name: 'Social Media Campaigns', slug: route.campaigns.social_media_campaigns, disable: true, icon: IconBrandTwitter },
      // { name: 'Campaign Analytics', slug: route.campaigns.campaign_analytics, disable: true, icon: IconChartBar },
    ],
  },
  {
    title: 'Manage',
    title2: 'HRMS',
    disable: false,

    color: '#0033ff',
    color_light: hexToRgba('#0033ff', 0.15),
    icon: <IconUserSquare color="#fff" />,

    featureActionButton: 'View Employees',
    featureActionButton2: 'Today Attendance',
    sub_menus: [
      {
        name: 'Dashboard',

        icon: IconLayoutDashboard,
      },
      { name: 'Employees', icon: IconUsers },
      {
        name: 'Attendance & Time',

        icon: IconClock,
      },
      {
        name: 'Shift Scheduling',

        icon: IconCalendarStats,
      },
      {
        name: 'Requests',

        icon: IconCalendarTime,
      },
      // {
      //   name: 'Performance Reviews',
      //
      //   icon: IconChartLine,
      // },
      {
        name: 'Document Center',

        icon: IconFileText,
      },
      {
        name: 'Workflow Automation',

        icon: IconSettingsAutomation,
      },
    ],
  },
  {
    title: 'Manage',
    title2: 'Accounts',
    color: '#c735d0',
    disable: false,
    hide: true,
    color_light: hexToRgba('#c735d0', 0.15),
    icon: <IconUsers color="#fff" />,
    featureActionButton: 'Accounts Directory',
    featureActionButton2: 'Add New Account',
    sub_menus: [
      {
        name: 'Dashboard',

        icon: IconLayoutDashboard,
      },
      {
        name: 'Departments',

        icon: IconBuilding,
      },
      { name: 'Add New Account', icon: IconPlus },
      {
        name: 'Accounts Directory',

        icon: IconAddressBook,
      },

      // Future / hidden modules
      {
        name: 'Attendance Management',
        disable: true,
        hide: true,
        icon: IconClock,
      },
      {
        name: 'Leave Management',
        disable: true,
        hide: true,
        icon: IconCalendarTime,
      },
      {
        name: 'Performance Reviews',
        disable: true,
        hide: true,
        icon: IconChartLine,
      },
      {
        name: 'Training & Development',
        disable: true,
        hide: true,
        icon: IconSchool,
      },
    ],
  },
  {
    title: 'Manage',
    title2: 'Invoices',
    color: '#e4344e',
    // disable: true,
    color_light: hexToRgba('#e4344e', 0.15),
    icon: <IconFileDollar color="#fff" />,
    featureActionButton: 'Browse Invoices',
    featureActionButton2: 'Create New Invoice',
    sub_menus: [
      {
        name: 'Invoice Dashboard',

        icon: IconLayoutDashboard,
      },
      {
        name: 'Browse Invoices',

        icon: IconFileInvoice,
      },
      {
        name: 'Create New Invoice',

        icon: IconFilePlus,
      },
      {
        name: 'Recurring Invoices',

        icon: IconRepeat,
      },
      {
        name: 'Invoice Transactions',

        icon: IconArrowsExchange,
      },
      {
        name: 'Customers',

        icon: IconUsers,
      },
    ],
  },
  {
    title: 'Manage',
    title2: 'Stores',
    disable: false,

    color: '#52b9e7',
    color_light: hexToRgba('#52b9e7', 0.15),
    icon: <IconPackage color="#fff" />,
    featureActionButton: 'Browse Stores',
    featureActionButton2: 'View Store Customers',
    sub_menus: [
      {
        name: 'Dashboard',

        icon: IconLayoutDashboard,
      },
      // {
      //   name: 'Warehouse management',
      //
      //   disable: true,
      //   icon: IconBuildingWarehouse,
      // },
      { name: 'Pages', icon: IconFileText },
      {
        name: 'Suppliers',

        icon: IconTruckDelivery,
      },
      { name: 'Brands', icon: IconTags },
      { name: 'Stores', icon: IconBuildingStore },
      {
        name: 'Store Customers',

        icon: IconUsers,
      },
      { name: 'Vendors', icon: IconUserHexagon },
      { name: 'Categories', icon: IconCategory2 },
      {
        name: 'Sub Categories',

        icon: IconCategory,
      },
      { name: 'Products', icon: IconPackage },
      { name: 'Live Stream', icon: IconVideo },
      { name: 'Discounts', icon: IconDiscount2 },
      { name: 'Banners', icon: IconPhoto },
      {
        name: 'Payment Methods',

        icon: IconCreditCard,
      },
      {
        name: 'Shipping Methods',

        icon: IconShip,
      },
      {
        name: 'Shipping Address',

        icon: IconMapPin,
      },
    ],
  },
  {
    title: 'Manage',
    title2: 'Orders',
    disable: false,
    color: '#8648e4',
    color_light: hexToRgba('#8648e4', 0.15),
    icon: <IconTruckDelivery color="#fff" />,
    featureActionButton: 'Order Tracking',
    featureActionButton2: 'View Returns Order',
    sub_menus: [
      {
        name: 'Order Dashboard',

        disable: false,
        icon: IconLayoutDashboard,
      },
      // { name: 'Create New Order', disable: true, icon: IconFilePlus },
      // { name: 'Order Processing', disable: true, icon: IconLoader },
      // { name: 'Order Fulfillment', disable: true, icon: IconChecklist },
      // { name: 'Shipping Management', disable: true, icon: IconTruck },
      {
        name: 'Order Tracking',

        icon: IconTruckDelivery,
      },
      {
        name: 'Returns',

        disable: true,
        icon: IconArrowBackUp,
      },
      {
        name: 'Customer Management',

        disable: true,
        icon: IconUsers,
      },
      // { name: 'Order Reports', disable: true, icon: IconReportAnalytics },
      // { name: 'Sales Channels', disable: true, icon: IconShoppingCart },
      // { name: 'Order Status Updates', icon: IconRefresh },
    ],
  },
  {
    title: 'Manage',
    title2: 'Payrolls',
    disable: false,

    color: '#e73470',
    color_light: hexToRgba('#e73470', 0.15),
    icon: <IconMoneybag color="#fff" />,

    featureActionButton: 'Browse Payrolls',
    featureActionButton2: 'Create Payroll',
    sub_menus: [
      {
        name: 'Payroll Dashboard',

        icon: IconLayoutDashboard,
      },
      {
        name: 'Create Payroll',

        icon: IconUsers,
      },
      {
        name: 'Browse Payroll',

        icon: IconReportMoney,
      },
    ],
  },
  {
    title: 'Manage',
    title2: 'Tickets',
    disable: false,

    color: '#7dc12e',
    color_light: hexToRgba('#7dc12e', 0.15),
    icon: <IconLifebuoy color="#fff" />,

    featureActionButton: 'Browse Tickets',
    featureActionButton2: 'Create Tickets',
    sub_menus: [
      { name: 'Ticket Dashboard' },
      { name: 'Tickets' },
      { name: 'My Tickets' },
      {
        name: 'Ticket Dashboard',

        icon: IconLayoutDashboard,
      },
      { name: 'Tickets', icon: IconTicket },
      // {
      //   name: 'Ticket Tracking',
      //
      //   icon: IconRoute,
      // },
    ],
  },
  {
    title: 'Manage',
    title2: 'Files',
    disable: false,
    color: '#ff9400',
    color_light: hexToRgba('#ff9400', 0.15),
    icon: <IconFileIsr color="#fff" />,

    featureActionButton: 'Browse Files',
    featureActionButton2: 'Upload Files',
    sub_menus: [
      {
        name: 'File Dashboard',

        icon: IconLayoutDashboard,
      },
      {
        name: 'Upload Files',

        icon: IconUpload,
      },
      {
        name: 'File Categories',

        icon: IconFolders,
      },
      {
        name: 'File Versioning',

        icon: IconVersions,
      },
      { name: 'File Sharing', icon: IconShare },
      {
        name: 'Access Controls',

        icon: IconLockAccess,
      },
      { name: 'File Search', icon: IconSearch },
      { name: 'Recent Files', icon: IconClock },
      {
        name: 'Archived Files',

        icon: IconArchive,
      },
      { name: 'File Reports', icon: IconReport },
      {
        name: 'Deleted Files',

        icon: IconTrash,
      },
    ],
  },
];

export const profile_status: any = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
};
