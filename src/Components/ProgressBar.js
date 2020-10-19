import React, { useEffect } from "react";
import useStorage from "./hooks/useStorage";
import { CircularProgress } from "@material-ui/core";
function ProgressBar({ file, setFile, uid }) {
  const { progress, url } = useStorage(file, uid);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <div>
      <CircularProgress variant="static" value={progress} />
    </div>
  );
}

export default ProgressBar;
