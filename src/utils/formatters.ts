import { format, isSameDay } from 'date-fns';

export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  return isSameDay(date, new Date())
    ? format(date, 'h:mm a').toLowerCase()
    : format(date, 'dd.MM.yy');
};
