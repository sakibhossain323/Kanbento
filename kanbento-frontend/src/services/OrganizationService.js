import axios from "axios";

const BASE_ORGANIZATION_API_URL = "http://localhost:8080/api/organizations";

export const createOrganizationService = (organization) => axios.post(BASE_ORGANIZATION_API_URL, organization);