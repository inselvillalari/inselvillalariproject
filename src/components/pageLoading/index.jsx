// src/components/pageLoading/index.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import "./index.css";

const PageLoading = () => {
  const { loading } = useSelector((state) => state.general);
  const [visible, setVisible] = useState(false);
  const [internalLoading, setInternalLoading] = useState(false);

  useEffect(() => {
    let delayTimeout;
    let cleanupTimeout;

    if (loading) {
      setInternalLoading(true);
      setVisible(true);
    } else {
      delayTimeout = setTimeout(() => {
        setVisible(false);
        cleanupTimeout = setTimeout(() => {
          setInternalLoading(false);
        }, 300);
      }, 500);
    }

    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(cleanupTimeout);
    };
  }, [loading]);

  if (!internalLoading) return null;

  return (
    <div className={`spinner ${!visible ? "fade-out" : ""}`}>
      <Spinner color="dark" style={{ width: "3rem", height: "3rem" }} />
    </div>
  );
};

export default PageLoading;
