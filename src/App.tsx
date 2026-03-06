import { useState } from 'react';
import DynamicRemote from './components/DynamicRemote';

// MOCK: This data would normally come from the .NET Web API
const MOCK_REGISTRY = [
  {
    id: 'weather-1',
    name: 'Live Weather',
    url: 'http://localhost:3001',
    scope: 'mfe_weather',
    module: './Widget'
  }
];

function App() {
  const [modules] = useState(MOCK_REGISTRY);

  return (
    <div className="p-10 border m-5">
      <header>
        <h1 className="bg-primary text-white">Shell (Host)</h1>
        <p>Managing modules via .NET Registry Mock</p>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {modules.map((m) => (
          <div key={m.id}>
            <p><strong>Slot: {m.name}</strong></p>
            <DynamicRemote 
              url={m.url} 
              scope={m.scope} 
              module={m.module} 
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;