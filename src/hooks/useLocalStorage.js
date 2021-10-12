const useLocalStorage = () => {
  const get = (item) => window.localStorage.getItem(item);
  const set = ({ key, item }) => window.localStorage.setItem(key, item);
  const remove = (item) => window.localStorage.removeItem(item);

  return { get, set, remove };
};

export default useLocalStorage;
