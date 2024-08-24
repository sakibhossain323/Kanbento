import axios from "axios";

const BASE_ORGANIZATION_API_URL = "http://localhost:8080/api/organizations";

export const createOrganization = (organization) =>
    axios.post(BASE_ORGANIZATION_API_URL, organization);

export const getAllOrganizations = () => axios.get(BASE_ORGANIZATION_API_URL);

export const getOrganizationById = (id) =>
    axios.get(`${BASE_ORGANIZATION_API_URL}/${id}`);

export const getOrganizationsByOwnerId = (ownerId) =>
    axios.get(`${BASE_ORGANIZATION_API_URL}/owner/${ownerId}`);

export const getOrganizationMembers = (id) =>
    axios.get(`${BASE_ORGANIZATION_API_URL}/${id}/members`);

export const addMemberToOrganization = (orgId, memberId) =>
    axios.put(`${BASE_ORGANIZATION_API_URL}/${orgId}/members/${memberId}`);

export const removeMemberFromOrganization = (orgId, memberId) =>
    axios.delete(`${BASE_ORGANIZATION_API_URL}/${orgId}/members/${memberId}`);
