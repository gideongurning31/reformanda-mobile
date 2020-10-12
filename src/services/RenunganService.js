import Api from './Api';

export const RenunganApi = {
  getAll: () => Api.get('/renungan'),
  getById: (id) => Api.get(`/renungan/${id}`),
};
