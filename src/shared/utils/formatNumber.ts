export function formatNumber(number: number) {
  return new Intl.NumberFormat('en-EN', { style: 'decimal' }).format(number).replaceAll(',', ' ');
}
