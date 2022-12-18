import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToToastList,
  removeFromToastList,
  selectToastItems,
} from "../redux/toastSlice";

function useToaster() {
  const dispatch = useDispatch();
  const [delayTime, setDelayTime] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const items = useSelector(selectToastItems);
  let interval;
  const showToaster = ({ id, message, type, delay }) => {
    dispatch(
      addToToastList({
        id,
        message,
        type,
        delay,
      })
    );
    setDelayTime(delay);
    setCurrentId(id);
  };

  const removeToaster = (id) => {
    dispatch(removeFromToastList({ id }));
    if (interval) {
      clearInterval(interval);
    }
  };

  useEffect(() => {
    if (delayTime > 0) {
      interval = setTimeout(() => {
        dispatch(removeFromToastList({ id: currentId }));
      }, delayTime);
    }
    return () => clearInterval(interval);
  }, [delayTime, currentId]);

  return {
    showToaster,
    removeToaster,
  };
}

export default useToaster;
