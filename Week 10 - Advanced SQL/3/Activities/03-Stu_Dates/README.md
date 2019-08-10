# Instructions

* Use the dow.sqlite dataset provided to analyze the average stock prices (average open, average high, average low, average close) for all stocks in the Month of May

* Plot the results as a Pandas or Matplotlib Bar Chart

### Bonus

Calculate the high-low peak-to-peak (PTP) values for `IBM` stock after `2011-05-31`.

* Note: high-low PTP is calculated using `high_price` - `low_price`
* Use a DateTime.date object in the query filter
* Use a list comprehension or NumPy's ravel method to unpack the query's list of tuples into a list of PTP values.
* Use matplotlib to plot the PTP values as a boxplot
