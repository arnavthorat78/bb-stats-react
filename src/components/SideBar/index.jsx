import { FaHome, FaChartPie, FaInfoCircle } from "react-icons/fa";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaHome size="30" />} tooltip="Home" />
      <SideBarIcon icon={<FaChartPie size="30" />} tooltip="Stats" />
      <SideBarIcon icon={<FaInfoCircle size="30" />} tooltip="About" />
    </div>
  );
}

const SideBarIcon = ({ icon, tooltip = "BB Stats" }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="text-sm sidebar-tooltip group-hover:scale-100">{tooltip}</span>
  </div>
);

export default SideBar;
