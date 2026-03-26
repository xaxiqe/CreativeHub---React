import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) return "Loading...";

  return isAuthenticated ? (
    <>
      <p>Logged in as {user.email}</p>

    <p className="text-2xl mt-5 font-bold">
  Welcome: <span className="text-blue-500">{user.email }</span>
</p>

      <button onClick={logout} className="mt-10 px-3 py-2 text-sm mx-auto text-gray-800 bg-blue-500 rounded cursor-pointer hover:bg-blue-500/80">Logout</button>
    </>
  ) : (
    <>
      {error && <p>Error: {error.message}</p>}

      <div className="flex gap-2">
      <button onClick={signup}className="mt-10 px-3 py-2 text-sm text-gray-800 bg-blue-500 rounded cursor-pointer hover:bg-blue-500/80">Signup</button>

      <button onClick={login} className="mt-10 px-3 py-2 text-sm  text-gray-800 bg-blue-500 rounded cursor-pointer hover:bg-blue-500/80">Login</button>

      </div>

    </>
  );
}

export default App;


