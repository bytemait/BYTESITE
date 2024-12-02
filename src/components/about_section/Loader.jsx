import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      setIsLoading(false);
    }
  }, [progress]);

  return (
    <Html
      as="div"
      center
      style={styles.container}
    >
      <div style={styles.loaderContainer}>
        <div style={styles.spinner}></div>
      </div>
      <p style={styles.progressText}>
        {isLoading ? `${progress.toFixed(2)}%` : "Loading Complete!"}
      </p>
    </Html>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    border: "5px solid #1F1F1F", 
    borderTop: "5px solid #00FF00", 
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1.5s linear infinite", 
  },
  progressText: {
    fontSize: "16px",
    color: "#00FF00", 
    fontWeight: "800",
    marginTop: "20px",
  },
};

export default CanvasLoader;
