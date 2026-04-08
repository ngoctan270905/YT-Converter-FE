import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { FormatsPage } from "./pages/FormatsPage";
import { FAQPage } from "./pages/FAQPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/features",
        element: <FeaturesPage />,
    },
    {
        path: "/formats",
        element: <FormatsPage />,
    },
    {
        path: "/faq",
        element: <FAQPage />,
    },
    {
        path: "/terms",
        element: <TermsPage />,
    },
    {
        path: "/privacy",
        element: <PrivacyPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    }
]);
