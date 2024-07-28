import { Routes as Router, Route } from "react-router-dom";

import { Home } from "./routes/home";

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  )
}