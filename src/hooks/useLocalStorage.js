const useLocalStorage = () => {
  const get = (item) => window.localStorage.getItem(item);
  const set = (item) => window.localStorage.setItem(item);
  const remove = (item) => window.localStorage.removeItem(item);

  return { get, set, remove };
};

export default useLocalStorage;
