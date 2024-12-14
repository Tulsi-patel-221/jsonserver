import { createStore } from "redux"
import UserReducer from "./UserReducer"

const userstore = createStore(UserReducer)

export default userstore