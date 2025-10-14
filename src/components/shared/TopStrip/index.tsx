import parser from "html-react-parser";
import { Link } from "react-router-dom";
import useTopStrip from "./useTopStrip";
import styles from "./TopStrip.module.css";
import { SOCIAL_MEDIA } from "../../../utils/constants/contact";

const TopStrip = () => {
  const { config } = useTopStrip();
  // if (loading) {
  //   return (
  //     <div className="animate-pulse">
  //       <div className="h-[51px] w-full bg-gray-300 " />
  //     </div>
  //   );
  // }
  if (!config.show) {
    return null;
  }

  return (
    <Link
      className={styles.container}
      to={config.link || SOCIAL_MEDIA.WHATSAPPCHANNEL}
    >
      <p className={`${styles.text} scrollbar-hidden`}>{parser(config.text)}</p>
    </Link>
  );
};

export default TopStrip;
