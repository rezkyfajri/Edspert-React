import Axios from "axios";
export const httpService = Axios.create({
  baseURL: 'https://64ea3184bf99bdcc8e676251.mockapi.io/product/api/v1'
})
