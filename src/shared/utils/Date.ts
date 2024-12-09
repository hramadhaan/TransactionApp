export const formatDate = (input: string): string => {
  const months: string[] = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const [datePart] = input.split(' ');
  const [year, month, day] = datePart.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  return `${String(day).padStart(2, '0')} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
};
