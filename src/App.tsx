import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "@/sections/Header";
import { HomePage } from "@/pages/HomePage";
import { MembershipPage } from "@/pages/MembershipPage";
import { AmbassadorPage } from "@/pages/AmbassadorPage";
import { VendorPage } from "@/pages/VendorPage";
import { LoginPage } from "@/pages/LoginPage";
import { MemberDashboard } from "@/pages/MemberDashboard";
import { MemberExpertsPage } from "@/pages/MemberExpertsPage";
import { MemberPlaceholderPage } from "@/pages/MemberPlaceholderPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { Footer } from "@/sections/Footer";
import { ToastContainer } from "@/components/ToastContainer";
import { SignupModal } from "@/components/SignupModal";
import { SuccessScreen } from "@/components/SuccessScreen";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { AuthProvider } from "@/contexts/AuthContext";
import { AuthGuard } from "@/components/AuthGuard";

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
      <AuthProvider>
        <body className="text-neutral-950 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-neutral-950/50 pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-ui_sans_serif">
          <div className="box-border caret-transparent outline-neutral-950/50">
            <div className="text-white bg-black box-border caret-transparent min-h-[1000px] outline-neutral-950/50">
              <Header />
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage onApplyClick={handleApplyClick} />} />
                <Route path="/membership" element={<MembershipPage onApplyClick={handleApplyClick} />} />
                <Route path="/ambassador" element={<AmbassadorPage />} />
                <Route path="/vendors" element={<VendorPage onApplyClick={handleApplyClick} />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Protected Member Routes */}
                <Route path="/members" element={<AuthGuard><MemberDashboard /></AuthGuard>} />
                <Route path="/members/experts" element={<AuthGuard><MemberExpertsPage /></AuthGuard>} />
                <Route path="/members/roundtables" element={
                  <AuthGuard>
                    <MemberPlaceholderPage title="Roundtables" description="Intimate roundtable discussions with fellow B2B marketers. Coming soon." icon="🗣️" />
                  </AuthGuard>
                } />
                <Route path="/members/directory" element={
                  <AuthGuard>
                    <MemberPlaceholderPage title="Member Directory" description="Connect with other CMO Club members. Coming soon." icon="📇" />
                  </AuthGuard>
                } />
                <Route path="/members/calendar" element={
                  <AuthGuard>
                    <MemberPlaceholderPage title="Events Calendar" description="Upcoming dinners, events, and community meetups. Coming soon." icon="📅" />
                  </AuthGuard>
                } />
                <Route path="/members/library" element={
                  <AuthGuard>
                    <MemberPlaceholderPage title="Resource Library" description="Templates, playbooks, and marketing resources. Coming soon." icon="📚" />
                  </AuthGuard>
                } />
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
      </AuthProvider>
    </Router>
  );
};
