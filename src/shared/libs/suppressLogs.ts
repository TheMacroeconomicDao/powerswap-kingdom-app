export const suppressLogs = (callback: () => void) => {
    const originalConsoleLog = console.log;
    console.log = () => {};
    callback();
    console.log = originalConsoleLog;
  };