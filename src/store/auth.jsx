
'use client'
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token") || "");
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const API = "https://api.durlavparajuli.com.np"; // Replace with your actual API

	const storeToken = (serverToken) => {
		setToken(serverToken);
		localStorage.setItem("token", serverToken);
	};

	const LogoutUser = () => {
		setToken("");
		localStorage.removeItem("token");
		setUser(null);
	};

	let isLoggedIn = !!token;

	const userAuthentication = async () => {
		setLoading(true);
		try {
			const response = await fetch(`${API}/api/auth/user`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.ok) {
				const data = await response.json();
				setUser(data.userData);
			} else {
				LogoutUser();
			}
		} catch (error) {
			console.error("Error during authentication:", error);
			LogoutUser();
		} finally {
			setLoading(false);
		}
	};

	// useEffect(() => {
	// 	if (token) {
	// 		userAuthentication();
	// 	} else {
	// 		LogoutUser();
	// 	}
	// }, [token]);

	return (
		<AuthContext.Provider value={{ isLoggedIn, storeToken, LogoutUser, user, token, API, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    // throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
