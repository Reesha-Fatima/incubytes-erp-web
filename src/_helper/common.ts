import { TypeDropdownOption } from '@ts';
import moment, { DurationInputArg2 } from 'moment';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const getAsset = () => {};

export const toSentenceCase = (str: string = '') => {
  return str
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
};

export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getStepCompletion = (fields: any[], profile: any): number => {
  const total = fields.length;
  const filled = fields.filter((field) => {
    const value = profile?.[field.fieldKey];
    if (Array.isArray(value)) return value.length > 0;
    return value !== null && value !== undefined && value !== '';
  }).length;

  return Math.round((filled / total) * 100);
};

export const sentenceCase = (str: any = ''): string => {
  if (typeof str !== 'string') return 'N/A'; // Ensure input is a string
  return str
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
};

export const formatEventDateTime = (startDate: string, endDate: string) => {
  const start = moment(startDate);
  const end = moment(endDate);

  const sameDay = start.isSame(end, 'day');

  const formattedDate = start.format('Do [of] MMMM, YYYY');
  const startTime = start.format('h:mm A');
  const endTime = end.format('h:mm A');

  return sameDay
    ? `${formattedDate}. ${startTime} to ${endTime}`
    : `${start.format('Do [of] MMMM, YYYY, h:mm A')} to ${end.format(
        'Do [of] MMMM, YYYY, h:mm A',
      )}`;
};

export const normalizeDetails = (details: unknown): any[] => {
  try {
    if (typeof details === 'string' && details.trim() !== '') {
      return JSON.parse(details);
    } else if (Array.isArray(details)) {
      return details;
    } else {
      console.warn('🟡 details is not parsable:', details);
      return [];
    }
  } catch (err) {
    console.error('❌ Failed to parse details:', err, details);
    return [];
  }
};

export const toCaseSentence = (str?: string | null) => {
  if (!str) return '';

  // List of known acronyms to preserve
  const acronyms = ['UAE', 'USA', 'UK', 'EU', 'GST'];

  // Split into words
  const words = str.split(' ');

  const formattedWords = words.map((word, index) => {
    const upperWord = word.toUpperCase();
    if (acronyms.includes(upperWord)) return upperWord;

    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return word.toLowerCase();
  });

  return formattedWords.join(' ');
};

export const formatExperience = (value?: string | null): string => {
  if (!value) return '';
  const match = value.match(/\d+/);
  const number = match ? Number(match[0]) : null;

  if (!number) return value;

  return number === 1
    ? '1 year of experience'
    : `${number} years of experience`;
};

export const formateTimeAgo = (date: Date) => {
  if (!date) return '';

  const now = moment();
  const createdDate = moment(date);

  const yearsAgo = now.diff(createdDate, 'years');
  const monthsAgo = now.diff(createdDate, 'months');
  const daysAgo = now.diff(createdDate, 'days');
  const hoursAgo = now.diff(createdDate, 'hours');
  const minutesAgo = now.diff(createdDate, 'minutes');

  if (yearsAgo >= 1) {
    return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''}`;
  } else if (monthsAgo >= 1) {
    return `${monthsAgo} month${monthsAgo > 1 ? 's' : ''}`;
  } else if (daysAgo >= 1) {
    return `${daysAgo} day${daysAgo > 1 ? 's' : ''}`;
  } else if (hoursAgo >= 1) {
    return `${hoursAgo} hr${hoursAgo > 1 ? 's' : ''}`;
  } else if (minutesAgo >= 1) {
    return `${minutesAgo} min${minutesAgo > 1 ? 's' : ''}`;
  } else {
    return 'Just now';
  }
};

export const getBadgeColor = (action: string): string => {
  switch (action) {
    case 'Plan Subscription':
      return '#40c057';
    case 'Complaint submitted':
      return '#fa5252';
    case 'Profile Status Updated':
      return '#2298ec';
    case 'Matchmaking Status Updated':
      return '#4c6ef5';
    default:
      return 'gray';
  }
};

export const calculateAge = (date: Date): string => {
  const birthDate = new Date(date);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  // Adjust age if the current month/day is before the birth month/day
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return `${age}`;
};
// export const formatNumber = (value: string | number = 0) => {
//   const v = `${general.country} ${value
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
//   return v;
// };
export const formatNumber = (value: string | number = 0) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const formatCurrency = (value: string | number = 0) => {
  return `AED ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export const getNextPageParam: any = (
  lastPage: { next_page: number },
  pages: Array<any>,
) => {
  return lastPage.next_page;
};

export const stringToSlug = (string: string) => {
  // Convert to lowercase
  let slug = string.toLowerCase();

  // Remove special characters
  slug = slug.replace(/[^\w\s-]/g, '');

  // Replace spaces with dashes
  slug = slug.replace(/\s+/g, '-');

  // Remove consecutive dashes
  slug = slug.replace(/-+/g, '-');

  return slug;
};

export const pagesToList = (listPages: any) => {
  const list = listPages?.pages?.length
    ? listPages?.pages?.flatMap((page: any) => (page.data ? page.data : page))
    : [];
  return list;
};

export const generateRandomCode = (length = 12, numberOnly = false) => {
  const characters = numberOnly
    ? '0123456789'
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

export const subtractDates = (days: number, duration: DurationInputArg2) => {
  const date = moment()
    .locale('en')
    .subtract(days, duration)
    .format('YYYY-MM-DD');
  return new Date(date);
};

export const getCompany = (user: any) => {
  const company = user?.companies?.length ? user?.companies[0] : null;
  return company;
};

export const limitString = (content: string = '', maxLength: number = 500) => {
  if (content.length <= maxLength) {
    return content;
  }
  return content.substring(0, maxLength) + '...';
};

export const divideIntoChunks = (arr: any, chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

export const getFirstWord = (text: string) => {
  let words = text.split(' ');
  if (words.length > 0) {
    return words[0].substring(0, 2).toUpperCase();
  } else {
    return 'No valid word found';
  }
};

export const checkDuplicatesByLabel = (arr: TypeDropdownOption[]) => {
  const seenLabels = new Set();
  let duplicates: any = [];
  if (arr?.length) {
    duplicates = arr.filter((item: any) => {
      if (seenLabels.has(item.label)) {
        return true;
      }
      seenLabels.add(item.label);
      return false;
    });
  }
  return duplicates;
};

export const generateTimeSlots = () => {
  const timeSlots = [];
  let currentTime = new Date(0, 0, 0, 0, 0);

  for (let i = 0; i < 48; i++) {
    const startHour = currentTime.getHours();
    const startMinute = currentTime.getMinutes();
    const endTime = new Date(currentTime);
    endTime.setMinutes(currentTime.getMinutes() + 30);

    const startTimeFormatted = `${startHour % 12 || 12}:${
      startMinute === 0 ? '00' : '30'
    } ${startHour < 12 ? 'AM' : 'PM'}`;
    const endTimeFormatted = `${endTime.getHours() % 12 || 12}:${
      endTime.getMinutes() === 0 ? '00' : '30'
    } ${endTime.getHours() < 12 ? 'AM' : 'PM'}`;

    timeSlots.push(`${startTimeFormatted} - ${endTimeFormatted}`);

    currentTime.setMinutes(currentTime.getMinutes() + 30);
  }

  return timeSlots;
};

export const objToQuery = (params: Record<string, any>): string => {
  return Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&');
};
export const formatTime = (time: string) => {
  return dayjs(time, 'HH:mm:ss').format('hh:mm A');
};

export const isNull = (value: string) => {
  return value ?? 'N/A';
};
