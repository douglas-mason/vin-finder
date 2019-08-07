import axios from 'axios';
import { Policy } from '../interfaces/policy.interface';
import { Vehicle } from '../interfaces/vehicle.interface';

interface PolicyResponse {
  policies?: Policy[];
}

const config = {
  BASE_URL: 'https://api.trellisconnect.com/trellis/connect/1.1.0',
  CLIENT_ID: 'CHALLENGE',
  SECRET_KEY: 'CHALLENGESECRET',
};

const apiClient = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'X-API-Client-Id': config.CLIENT_ID,
    'X-API-Secret-Key': config.SECRET_KEY,
  },
});

export const getPoliciesByAccountId = async (accountId: string) => {
  const { data } = await apiClient.get<PolicyResponse>(
    `/account/${accountId}/policies`
  );
  return data.policies;
};

export const getAllVehiclesFromPolicies = (policies: Policy[] = []) => {
  const allVehicles = policies.reduce(
    (totalVehicles, policy) => {
      if (policy.vehicles) {
        for (const vehicle of policy.vehicles) {
          totalVehicles.push(vehicle);
        }
      }
      return totalVehicles;
    },
    [] as Vehicle[]
  );
  return allVehicles;
};
