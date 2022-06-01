let timer;
const debounce = (fn, delay) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(fn, delay);
};
const getSuggestions = () => {
  debounce(() => {
    // can make an api call here to reduce the number of hits on the server
  }, 500);
};
