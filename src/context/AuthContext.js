import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user:
    {
        "_id": {
            "$oid": "656342a3938250e3e73d4d8c"
        },
        "username": "Acharya prasant",
        "email": "prasant@gmail.com",
        "password": "$2b$10$MWf42ILFwXoyFv1b.RO5GusrtoNYn3Wdb3Wp8a2l60wE6ufxf6Bhy",
        "profilePicture": "",
        "coverPicture": "",
        "followers": [
            "656341d7938250e3e73d4d88",
            "65634281938250e3e73d4d8a"
        ],
        "followings": [],
        "isAdmin": false,
        "createdAt": {
            "$date": "2023-11-26T13:05:39.134Z"
        },
        "updatedAt": {
            "$date": "2023-11-27T06:55:29.437Z"
        },
        "__v": 0,
        "desc": "Hellooo my friends.."
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
} 