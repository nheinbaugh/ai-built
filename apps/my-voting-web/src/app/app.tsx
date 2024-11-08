import MainLayout from '../components/layout/MainLayout';

export function App() {
  return (
    <MainLayout>
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
        <h2 className="text-xl font-semibold mb-4 text-green-600">Welcome to the Voting System</h2>
        <p className="text-gray-600">
          This system allows you to securely participate in voting events.
        </p>
      </div>
    </MainLayout>
  );
}

export default App;
