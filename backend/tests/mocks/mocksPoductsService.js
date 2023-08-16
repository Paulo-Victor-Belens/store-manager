const serviceGetAll = {
  status: 'SUCCESSFUL',
  data: [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' },
  ],
};

const serviceGetById = { status: 'SUCCESSFUL', data: { id: 1, name: 'Martelo de Thor' } };

const updateService = { status: 'SUCCESSFUL', data: { id: 1, name: 'Martelo de Thor' } };

module.exports = {
  serviceGetAll,
  serviceGetById,
  updateService,
};