const useSession = () => {
  function setSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  function getSession(key) {
    return sessionStorage.getItem(key);
  }

  function removeSeeeion(key) {
    sessionStorage.removeItem(key);
  }

  function clearSession() {
    sessionStorage.clear();
  }

  return { setSession, getSession, removeSeeeion, clearSession };
};

export default useSession;
