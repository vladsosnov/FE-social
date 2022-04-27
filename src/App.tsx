import { ParentComponent } from "components/test";
import { useTypedSelector } from "hooks/useSelector";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Profile, Register, Messenger, Network } from "./pages";

export const App = () => {
  const { isLoggedIn } = useTypedSelector((store) => store.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={ParentComponent} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/messenger"
          element={!isLoggedIn ? <Navigate to="/" /> : <Messenger />}
        />
        <Route
          path="/profile/:username"
          element={isLoggedIn ? <Profile /> : <Login />}
        />
        <Route path="/network" element={isLoggedIn ? <Network /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};
