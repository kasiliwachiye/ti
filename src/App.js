import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Users from "./pages/Users";
import UpdateUser from "./pages/UpdateUser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
};

export default App;
