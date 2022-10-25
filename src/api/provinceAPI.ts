import { ListParams, ListResponse } from "../models/common";
import { Province } from "../models/province";
import axiosClient from "./axiosClient";
const provinceApi = {
  getAll(params: ListParams): Promise<ListResponse<Province>> {
    return axiosClient.get(apiLinks.province.common, { params });
  },
  getById(id: string): Promise<Province> {
    return axiosClient.get(`${apiLinks.province.common}/${id}`);
  },
  add(data: Province): Promise<Province> {
    return axiosClient.post(apiLinks.province.common, data);
  },
  update(data: Partial<Province>): Promise<Province> {
    return axiosClient.put(apiLinks.province.common, data);
  },
  remove(id: string): Promise<any> {
    return axiosClient.delete(`${apiLinks.province.common}/${id}`);
  },
};
export default provinceApi;
