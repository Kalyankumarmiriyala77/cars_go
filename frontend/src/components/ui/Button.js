// src/components/ui/Button.js
export const Button = ({ onClick, children }) => (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded-xl">
      {children}
    </button>
  );
  