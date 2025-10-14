import {
  // useEffect
  useState,
} from "react";
// import { logger } from "../../../utils/logger";
// import { QueryService } from "../../../api/modules/query";

const useTopStrip = () => {
  // const [
  //   loading,
  //  setLoading
  // ] = useState(true);
  const [
    config,
    //  setConfig
  ] = useState({
    link: "",
    text: "this is simple text and will be shown as strip gues",
    show: true,
  });
  // const fetchTopStrip = async () => {
  //   try {
  //     const res = await QueryService.getStripConfig();
  //     if (!res.response) {
  //       return;
  //     }
  //     setConfig(res.data);
  //   } catch (e) {
  //     logger.log(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchTopStrip();
  // }, []);

  return { config };
};
export default useTopStrip;
