import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSessionCookie } from "../utils/cookieFunctions";
import { clearSession, setSession } from "../store/slice/sessionSlice";

const useSession = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getSessionCookie();
    if (token) {
      dispatch(setSession({ token }));
    } else {
      dispatch(clearSession());
    }
  }, [dispatch]);
};

export default useSession;
