export default function Input({ value, onChange, onClick }) {
    return (
      <div className="border border-black mt-4 flex justify-between rounded-lg">
        <input
          placeholder="Ask your doubt..."
          value={value}
          onChange={onChange}
          className="px-4 py-2 rounded-md outline-none"
        />
        <button onClick={onClick} className="px-2 relative right-4 bg-gray-500">
          Go
        </button>
      </div>
    );
  }