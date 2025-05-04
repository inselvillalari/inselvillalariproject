// src/hoc/withLoading.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/generalSlice";

const withLoading = (WrappedComponent) => {
  const ComponentWithLoading = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
      // Sayfa mount olduğunda loading spinner'ı kapat
      const timer = setTimeout(() => {
        dispatch(setLoading(false));
      }, 500); // animasyon için küçük gecikme

      return () => clearTimeout(timer);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLoading;
};

export default withLoading;
