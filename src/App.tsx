import { useTypedSelector } from "hooks/useSelector";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import { Feed, Login, Profile, Register, Messenger, Network } from "./pages";

export const App = () => {
  const { isLoggedIn } = useTypedSelector((store) => store.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLink to="/feed">Home page</NavLink>} />
        <Route path="/feed" element={isLoggedIn ? <Feed /> : <Login />} />
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
