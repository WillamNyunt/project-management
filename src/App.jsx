import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <MainContent/>
    </div>
  );
}

export default App;
