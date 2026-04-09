import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const LoginPage = () => {
  const { user, loading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/members', { replace: true });
    }
  }, [user, loading, navigate]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-16 flex items-center justify-center px-4">
      <div className="absolute bg-[radial-gradient(circle,rgba(14,165,233,0.4)_0%,rgba(2,132,199,0.3)_30%,rgba(3,105,161,0.2)_50%,rgba(3,105,161,0)_70%)] shadow-[rgba(14,165,233,0.3)_0px_0px_200px_80px] h-[800px] left-[-200px] w-[800px] rounded-full top-0 animate-float pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-800 rounded-2xl p-8 text-center">
          {/* Logo / Title */}
          <div className="mb-8">
            <p className="text-sky-400 text-sm font-semibold tracking-[2px] uppercase mb-3">Members Only</p>
            <h1 className="text-white text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-zinc-400 text-base">
              Sign in to access your CMO Club member dashboard, expert consultations, and community resources.
            </p>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-colors shadow-lg mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="border-t border-zinc-800 mb-6" />

          {/* Not a member */}
          <p className="text-zinc-500 text-sm mb-4">
            Not a member yet?
          </p>
          <a
            href="/membership"
            className="inline-block px-6 py-3 border-2 border-sky-600 text-sky-400 font-semibold rounded-full hover:bg-sky-600 hover:text-white transition-colors"
          >
            Apply for Membership
          </a>
        </div>
      </div>
    </div>
  );
};
