import axios from "axios";

const BASE_ORGANIZATION_API_URL = "http://localhost:8080/api/organizations";

export const createOrganization = (organization) =>
    axios.post(BASE_ORGANIZATION_API_URL, organization);

export const getAllOrganizations = () => axios.get(BASE_ORGANIZATION_API_URL);

export const getOrganizationById = (id) =>
    axios.get(`${BASE_ORGANIZATION_API_URL}/${id}`);
