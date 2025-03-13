declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        expand: () => void;
        HapticFeedback?: {
          impactOccurred: (style: "light" | "medium" | "heavy") => void;
        };
      };
    };
  }
}

export {};