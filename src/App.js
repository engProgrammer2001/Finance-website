import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerRouters from "./routes/CustomerRouters";
import AdminRoute from "./routes/AdminRoute";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </Router>
  );
}

export default App;