// import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";

export default function App() {
  return (
    <>
     <Layout/>
      {/* <Routes>
        <Route path="/" element={}>
          <Route index element={<Login/>}/>
          <Route path="/dashboard" element={}>
            <Route index path="/" element={<div>Page Not Found</div>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/rentacar" element={<Rent/>}/>
            <Route path="/inventory" element={<div>Inventory </div>}/>
            <Route path="/balance" element={<Wallet/>}/>
            <Route path="*" element={<div>Page Not Found</div>}/>
          </Route>
          <Route path="*" element={<div>Page Not Found</div>}/>
        </Route>
      </Routes> */}
    </>
  );
}