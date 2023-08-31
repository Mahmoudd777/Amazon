import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  NavBar,
  Checkout,
  SearchResults,
  ProductPage,
  View,
  Login,
  Contact
} from "./components";
import Footer from "./components/Footer";
import SlideNav from "./components/SlideNav";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <SlideNav/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/view" element={<View />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
