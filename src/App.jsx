import "./App.css";
import DashboardBody from "./components/DashboardBody";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <div className="flex bg-[#f8f9fa]">
        <Sidebar />
        <DashboardBody />
      </div>
    </>
  );
}

export default App;
