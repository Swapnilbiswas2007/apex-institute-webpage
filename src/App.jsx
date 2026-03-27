import { Navigate, Route, Routes } from "react-router-dom";
import ChatbotWidget from "./components/ChatbotWidget";
import EnquireNowButton from "./components/EnquireNowButton";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import EnquiryConfirmation from "./pages/EnquiryConfirmation";
import MenuDetailPage from "./pages/MenuDetailPage";
import {
  MENU_PAGES,
  MENU_PAGE_REDIRECTS,
  SECTION_REDIRECTS,
} from "./lib/navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contact-us/confirmation" element={<EnquiryConfirmation />} />
        <Route path="/contact" element={<Navigate replace to="/contact-us" />} />
        <Route path="/contactus" element={<Navigate replace to="/contact-us" />} />
        {SECTION_REDIRECTS.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate replace to={to} />} />
        ))}
        {MENU_PAGE_REDIRECTS.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate replace to={to} />} />
        ))}
        {MENU_PAGES.map((page) => (
          <Route
            key={page.link}
            path={page.link}
            element={<MenuDetailPage page={page} />}
          />
        ))}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <ChatbotWidget />
      <EnquireNowButton />
    </>
  );
}

export default App;
