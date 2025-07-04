import { useEffect, useState } from "react";
import {
  Box,
  Image,
  CircularProgress
} from "@chakra-ui/react";
import logo from "../images/little_lemon.png"
const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 10, 100); // Increase progress by 10 each interval
      });
    }, 30); // Update progress every 500ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Box
      height="100vh"
      bgColor="#49SE57"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color="#EDEFEE"
    >
      <Image
        src={logo}
        alt="Loading Icon"
        boxSize="100px"
        mb={4}
      />
      <CircularProgress isIndeterminate color='green.300' />
    </Box>
  );
};

export default Loading;