import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./components/Auth";
import { Main } from "./pages/Main";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </Provider>
  );
};
