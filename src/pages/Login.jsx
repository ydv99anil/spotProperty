export default function Login() {
    return (
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-4 py-2 border rounded-md"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
          Login
        </button>
      </div>
    );
  }