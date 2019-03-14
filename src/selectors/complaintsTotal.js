export default (complaints) => {
    return complaints
        .map((complaints) => complaints.sum)
        .reduce((sum, value) => sum + value, 0);
  };
  