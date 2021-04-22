export function getDaysInMonth(month: number, year: number): number {
  console.log('getDaysInMonth', month, year);
  return (!month || !year) ? 0 : new Date(year, month, 0).getDate();
}