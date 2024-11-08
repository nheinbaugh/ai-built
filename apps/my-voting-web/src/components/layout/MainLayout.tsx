import { ReactNode } from 'react';
import ApiTest from '../ApiTest';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">My Voting System</h1>
          <p className="text-gray-600 mt-1">Welcome to the voting platform</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <ApiTest />
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 