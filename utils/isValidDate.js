const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date);
}

module.exports = isValidDate;
