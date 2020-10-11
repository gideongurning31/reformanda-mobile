import Api from './Api';

export const getAll = () => Api.get('/renungan');
export const getById = (id) => Api.get(`/renungan/${id}`);
