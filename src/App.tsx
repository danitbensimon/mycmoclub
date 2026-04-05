import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "@/sections/Header";
import { HomePage } from "@/pages/HomePage";
import { MembershipPage } from "@/pages/MembershipPage";
import { AmbassadorPage } from "@/pages/AmbassadorPage";
import { VendorPage } from "@/pages/VendorPage";
import { ComingSoonPage } from "@/pages/ComingSoonPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { Footer } from "@/sections/Footer";
import { ToastContainer } from "@/components/ToastContainer";
import { SignupModal } from "@/components/SignupModal";
import { SuccessScreen } from "@/components/SuccessScreen";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const App = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  const handleApplyClick = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignupModalOpen(false);
  };

  const handleSuccess = () => {
    setIsSignupModalOpen(false);
    setShowSuccessScreen(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccessScreen(false);
  };

  return (
    <Router>
      <body className="text-neutral-950 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-neutral-950/50 pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-ui_sans_serif">
        <div className="box-border caret-transparent outline-neutral-950/50">
          <div className="text-white bg-black box-border caret-transparent min-h-[1000px] outline-neutral-950/50">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage onApplyClick={handleApplyClick} />} />
              <Route path="/membership" element={<MembershipPage onApplyClick={handleApplyClick} />} />
              <Route path="/ambassador" element={<AmbassadorPage />} />
              <Route path="/vendors" element={<VendorPage onApplyClick={handleApplyClick} />} />
              <Route path="/members" element={<ComingSoonPage title="Members Dashboard" />} />
              <Route path="/members/experts" element={<ComingSoonPage title="Experts" />} />
              <Route path="/members/roundtables" element={<ComingSoonPage title="Roundtables" />} />
              <Route path="/members/directory" element={<ComingSoonPage title="Directory" />} />
              <Route path="/members/intro" element={<ComingSoonPage title="Intro" />} />
              <Route path="/members/calendar" element={<ComingSoonPage title="Calendar" />} />
              <Route path="/members/library" element={<ComingSoonPage title="Library" />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
            <Footer />
          </div>
          <SignupModal 
            isOpen={isSignupModalOpen} 
            onClose={handleCloseModal}
            onSuccess={handleSuccess}
          />
          {showSuccessScreen && <SuccessScreen onClose={handleCloseSuccess} />}
          <FloatingWhatsApp />
          <ToastContainer />
        </div>
      </body>
    </Router>
  );
};
