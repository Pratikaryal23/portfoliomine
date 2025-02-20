import { createContext } from "react";


 export const CreateAuth=createContextContext();

 export const AuthProvider=()=>{
    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeToken = (serverToken) => {
		setToken(serverToken);
		return localStorage.setItem("token", serverToken);
	};
    const LogoutUser = () => {
		setToken("");
		localStorage.removeItem("token");
		
	};
    let isLoggedIn = !!(token === localStorage.getItem("token"));
	
	console.log("Login Status: " + isLoggedIn);

    const userAuthentication = async () => {
		try {
			const response = await fetch(`${API}/api/auth/user`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			// console.log( response );
			if (response.ok) {
				const data = await response.json();
				// console.log( data );
				setUser(data.userData);
			} else {
				// logging out for any unauthorized or error response
				LogoutUser();
			}
		} catch (error) {
			console.log(error);
		}
	};
    useEffect(() => {
		if (!token) {
			// Token is not present, log out immediately
			LogoutUser();
		} else {
			// Token is present, perform authentication
			userAuthentication();
		}
	}, [token]);
 }