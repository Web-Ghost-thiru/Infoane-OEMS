import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/Navbar";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import FormListingPage from "./pages/FormListingPage";
import CheckAuth from "./components/CheckAuth";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl">
        <Routes>
          <Route
            path="/"
            element={
              <CheckAuth>
                <FormListingPage />
              </CheckAuth>
            }
          />
          <Route
            path="/sign-in"
            element={
              <CheckAuth>
                <SignInPage />
              </CheckAuth>
            }
          />
          <Route
            path="/sign-up"
            element={
              <CheckAuth>
                <SignUpPage />
              </CheckAuth>
            }
          />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route
            path="/reset-password/:userId/:token/:expiry"
            element={<ResetPassword />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;
