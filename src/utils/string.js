export const formatCurrency = money => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'đ̲';
};
