import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
declare const chrome: any;
const API_BASE = 'https://unsubmagic-backend.herokuapp.com';

type LinkItem = { url: string; selected: boolean };

const Popup: React.FC = () => {
  const [isConnected, setConnected] = useState(false);
  const [links, setLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    chrome.storage.local.get('accessToken', ({ accessToken }) => {
      if (accessToken) {
        setConnected(true);
      }
    });
  }, []);

  const connectMailbox = () => {
    const authUrl = `${API_BASE}/api/auth/authorize?provider=gmail`;
    chrome.identity.launchWebAuthFlow(
      { url: authUrl, interactive: true },
      (redirectUrl: string) => {
        const url = new URL(redirectUrl);
        const token = url.searchParams.get('access_token');
        if (token) {
          chrome.runtime.sendMessage({ type: 'OAUTH_SUCCESS', token }, (res: any) => {
            if (res.status === 'saved') setConnected(true);
          });
        }
      }
    );
  };

  return (
    <div style={{ padding: '16px', width: '300px' }}>
      <h1 style={{ fontSize: '18px', marginBottom: '12px' }}>UnsubMagic</h1>
      {!isConnected ? (
        <button onClick={connectMailbox}>Connect mailbox</button>
      ) : (
        <p>Mailbox connected. Scanning...</p>
      )}
    </div>
  );
};

const container = document.getElementById('root');
if (container) createRoot(container).render(<Popup />);