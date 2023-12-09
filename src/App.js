import { Route, Routes, Link } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai'
import publiceRoutes from "routes";
import Footer from "components/shared/Footer";
import Header from "components/shared/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        {publiceRoutes.map(route => <Route key={route.id} path={route.path} element={route.element} />)}
      </Routes>
      <Footer />
    </>
  );
}


export default App;
