import React, { Suspense } from 'react';

interface Props {
  url: string; 
  scope: string;  
  module: string;
}

const DynamicRemote = ({ url, scope, module }: Props) => {
  const RemoteComponent = React.lazy(async () => {
    const remoteUrl = `${url}/assets/remoteEntry.js`;
    
    const container = await import(/* @external */ remoteUrl);
    
    await container.init(Object.assign({
        react: {
            [React.version]: {
                get: () => Promise.resolve(() => React)
            }
        }
    }));

    const factory = await container.get(module);
    const Module = factory();
    return Module;
  });

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
      <Suspense fallback={<div>Connecting to {scope}...</div>}>
        <RemoteComponent />
      </Suspense>
    </div>
  );
};

export default DynamicRemote;