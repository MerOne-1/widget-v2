import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DebugContainer = styled.div<{ $hasErrors: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-family: monospace;
  padding: 20px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 9999;
  display: ${props => props.$hasErrors ? 'block' : 'none'};
`;

const LogEntry = styled.div<{ type: string }>`
  margin: 5px 0;
  color: ${props => {
    switch (props.type) {
      case 'error': return '#ff4444';
      case 'warn': return '#ffaa00';
      case 'info': return '#00aaff';
      default: return '#ffffff';
    }
  }};
`;

interface LogMessage {
  type: string;
  message: string;
  timestamp: string;
}

export const DebugLogger = () => {
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    // Only track errors and critical warnings
    const debugInfo: LogMessage[] = [];
    setLogs(debugInfo);

    // Override console methods
    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn,
      info: console.info
    };

    function addLog(type: string, args: any[]) {
      const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' ');
      
      setLogs(prev => [...prev, {
        type,
        message,
        timestamp: new Date().toISOString()
      }]);
    }

    console.log = (...args) => {
      originalConsole.log(...args);
      // Don't show regular logs
    };

    console.error = (...args) => {
      originalConsole.error(...args);
      addLog('error', args);
      setHasErrors(true);
    };

    console.warn = (...args) => {
      originalConsole.warn(...args);
      // Only show critical warnings
      if (args.some(arg => 
        String(arg).toLowerCase().includes('error') ||
        String(arg).toLowerCase().includes('failed') ||
        String(arg).toLowerCase().includes('invalid')
      )) {
        addLog('warn', args);
        setHasErrors(true);
      }
    };

    console.info = (...args) => {
      originalConsole.info(...args);
      addLog('info', args);
    };

    // No test logs needed
    
    // Cleanup
    return () => {
      console.log = originalConsole.log;
      console.error = originalConsole.error;
      console.warn = originalConsole.warn;
      console.info = originalConsole.info;
    };
  }, []);

  if (!hasErrors) return null;

  return (
    <DebugContainer $hasErrors={hasErrors}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <strong>Debug Log (Errors)</strong>
        <button 
          onClick={() => setHasErrors(false)}
          style={{ 
            background: 'none',
            border: '1px solid white',
            color: 'white',
            padding: '2px 8px',
            cursor: 'pointer',
            borderRadius: '3px'
          }}
        >
          Dismiss
        </button>
      </div>
      {logs.filter(log => log.type === 'error' || log.type === 'warn').map((log, index) => (
        <LogEntry key={index} type={log.type}>
          [{log.timestamp}] {log.type.toUpperCase()}: {log.message}
        </LogEntry>
      ))}
    </DebugContainer>
  );
};
