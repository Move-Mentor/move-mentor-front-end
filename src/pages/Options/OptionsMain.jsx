import Footer from "../../components/MainLayout/Footer";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import "../../App.css";
import { useToken } from "../../contexts/TokenContext";
import OptionsNav from "../../components/OptionsCards/OptionsCards";

const OptionsLayout = () => {
  const { role } = useToken();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <HeaderTop />
      <OptionsNav role={role} />
      <Footer />
    </div>
  );
};

export default OptionsLayout;
