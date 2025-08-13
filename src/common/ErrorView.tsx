import React from "react";

interface ErrorViewProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showRetryButton?: boolean;
  retryButtonText?: string;
}

const ErrorView: React.FC<ErrorViewProps> = ({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again later.",
  onRetry,
  showRetryButton = true,
  retryButtonText = "Try Again",
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center h-[30vh]">
      <svg
        className="w-16 h-16 text-red-500 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{message}</p>
      {showRetryButton && onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {retryButtonText}
        </button>
      )}
    </div>
  );
};

export default ErrorView;
