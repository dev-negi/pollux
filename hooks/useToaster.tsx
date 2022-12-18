import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToToastList,
  removeFromToastList,
  selectToastItemsCount,
  selectToastItems,
} from "../redux/toastSlice";

function useToaster() {
  const dispatch = useDispatch();
  const [delayTime, setDelayTime] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const items = useSelector(selectToastItems);
  console.log("items:--", items);
  // const id = items.length + 1;

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
  };

  useEffect(() => {
    let interval;
    if (delayTime > 0) {
      interval = setTimeout(() => {
        // removeToaster(id);
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

// function removeToaster(id) {
//   dispatch(removeFromToastList({ id }));
// }

// export { showToaster, removeToaster };

// import { useState, useEffect } from "react";

// const useForm = (callback, validate) => {
//   const [values, setValues] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && isSubmitting) {
//       callback();
//     }
//   }, [errors]);

//   const handleSubmit = (event) => {
//     if (event) {
//       event.preventDefault();
//     }
//     setErrors(validate(values));
//     setIsSubmitting(true);
//   };

//   const handleChange = (event) => {
//     event.persist();
//     setValues((values) => ({
//       ...values,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   return {
//     handleChange,
//     handleSubmit,
//     values,
//     errors,
//   };
// };

export default useToaster;
