import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const axionsInstance = axios.create({baseURL}
);

export const fetchUsers = async()=>{
    const Response=await axionsInstance.getUri("/users")
    return Response.data;

};
