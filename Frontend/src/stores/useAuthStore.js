import {create} from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../lib/AxiosInstance";
export const useAuthStore = create((get ,set) => ({
  
    authUser : null ,
    isLoggingIn : false ,
    isSigningUp : false ,
    isLoading : false ,
    isUpdatingProfile : false ,
    isCheckingAuth : true ,
    CheckAuth : async () => {
        try {
            const response = await axios.get("/auth/check");
            set({authUser : response.data.user});
            console.log(response.data.user);
        } catch (error) {
            toast.error("Error checking authentication");
            console.log(error);
        }
    },
    login : async (data) => {
        try {
            set({isLoggingIn : true});
            const response = await axiosInstance.post("/auth/login", data);
            set({authUser : response.data.user});
            toast.success("Logged in successfully");
        } catch (error) {
            toast.error("Error logging in");
            console.log(error);
        }
        finally {
            set({isLoggingIn : false});
        }
    }
}));

export default useAuthStore;
