import { MainLayout } from '../components/layout/MainLayout';

export function App() {
  return (
    <MainLayout>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Voting System</h2>
        <p className="text-gray-600">
          This system allows you to securely participate in voting events.
        </p>
      </div>
    </MainLayout>
  );
}

export default App;
