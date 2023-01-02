import MainLayout from "./client/components/MainLayout/MainLayout";
import Routers from "./client/Routers";
import StartUp from "./client/StartUp";


const App = () => {

  return (
    <StartUp>
        <MainLayout>
          <Routers/>
        </MainLayout>
    </StartUp>
  );
};

export default App;