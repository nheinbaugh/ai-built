import { useEffect, useState } from 'react';

interface HealthStatus {
  status: string;
}

export const ApiTest = () => {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/health')
      .then(response => response.json())
      .then(data => setHealth(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="mt-4 p-4 border rounded-lg bg-white">
      <h2 className="text-lg font-semibold mb-2">API Connection Test</h2>
      {health && (
        <div className="text-green-600">
          API Status: {health.status}
        </div>
      )}
      {error && (
        <div className="text-red-600">
          Error connecting to API: {error}
        </div>
      )}
    </div>
  );
};

export default ApiTest; 