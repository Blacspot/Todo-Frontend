import type { RootState } from "@reduxjs/toolkit/query"
import { usersAPI } from "../../features/auth/userAPI"


const Profile = () => {
 
    const user_id = useSelector((state: RootState) => state.user.user?.userid)

    const { data, isLoading, error } = usersAPI.useGetUserByIdQuery(user_id ?? 0, {
        skip: !user_id
    })

    console.log(data)
}

export default Profile