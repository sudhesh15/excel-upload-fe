import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from '../src/components/IndexPage.js';
import HomePage from '../src/components/HomePage';
import NotFoundPage from '../src/components/NotFoundPage.js';
import './App.css';
import SearchPage from "./components/SearchPage.js";
import AggregatePolicyPage from "./components/AggregatePolicyPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/aggregate-policies" element={<AggregatePolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
