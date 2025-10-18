import { Routes, Route } from "react-router-dom";

import Layout from "layouts";
const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default App;
