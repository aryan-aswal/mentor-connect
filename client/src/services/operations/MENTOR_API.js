import toast from 'react-hot-toast'
import { endpoints, mentor } from '../api'
import { apiConnector } from '../apiConnector'


const {
    CREATE_MENTOR_API
} = endpoints

const {
    FETCH_MENTOR_DETAILS_API,
    FETCH_ALL_MENTORS_API
} = mentor

export const createMentor = (mentorData, token) => {
    return async () => {
        const toastId = toast.loading("Creating mentor...");

        try {
            // Call the API endpoint to create a mentor
            const response = await apiConnector("POST", CREATE_MENTOR_API, { ...mentorData, token }, { Authorization: "Bearer " + token });

            console.log("CREATE MENTOR API RESPONSE:", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("Mentor created successfully!");

        } catch (error) {
            console.error("CREATE MENTOR API ERROR:", error);
            toast.error(error?.response?.data?.message || "Failed to create mentor.");
        }

        toast.dismiss(toastId);
    };
};

export const fetchMentorDetails = async (mentorId) => {
    const toastId = toast.loading("Fetching mentor details...");
    try {
        // Call the API endpoint to fetch mentor details
        const response = await apiConnector("GET", `${FETCH_MENTOR_DETAILS_API}?mentorId=${mentorId}`);

        console.log("FETCH MENTOR DETAILS API RESPONSE:", response);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        // Optionally, you can return the fetched data for further processing in your frontend
        const mentorData = response.data.mentor;
        toast.success("Mentor details fetched successfully!");
        toast.dismiss(toastId);
        return mentorData;

    } catch (error) {
        console.error("FETCH MENTOR DETAILS API ERROR:", error);
        toast.error(error?.response?.data?.message || "Failed to fetch mentor details.");
    }
    toast.dismiss(toastId);
};

export const fetchAllMentors = async () => {
    const toastId = toast.loading("Fetching mentors...");
    try {
        // API call to fetch all mentors
        const response = await apiConnector("GET", FETCH_ALL_MENTORS_API);
        console.log("FETCH ALL MENTORS API RESPONSE............", response);

        // Handle response
        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        toast.dismiss(toastId);
        toast.success("Mentors fetched successfully");
        return response.data.data;

    } catch (error) {
        console.error("FETCH ALL MENTORS API ERROR............", error);
        toast.error(error?.response?.data?.message || "Failed to fetch mentors");
    }
    toast.dismiss(toastId);
};