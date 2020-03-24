const connection = require('../database/connection');

module.exports = {

  async listAll(request, response) {
    const incidents = await connection('incidents').select('*');

    return response.json(incidents);
  },

  async create(request, response) {

    const {
      title,
      description,
      value
    } = request.body;
    const ongId = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id: ongId
    });

    return response.json({
      id
    });

  },

  async delete(request, response) {

    const {
      id
    } = request.params;
    const ongId = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ongId) {
      return response.status(401).json({
        error: "Operation not permitted!"
      });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return response.status(204).send();

  },
}