import * as Yup from 'yup';
import Recipient from '../models/Recipients';

class RecipientController {
  async index(req, res) {
    try {
      const recipient = await Recipient.findAll();

      return res.json(recipient);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const recipient = await Recipient.findByPk(req.params.id);

      return res.json(recipient);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cep: Yup.string()
        .required()
        .min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Create: Validation fails' });
    }

    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExists) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }

    try {
      const recipient = await Recipient.create(req.body);

      return res.json(recipient);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cep: Yup.string()
        .required()
        .min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Update: Validation fails' });
    }

    try {
      const recipient = await Recipient.findByPk(req.params.id);

      await recipient.update(req.body);

      return res.json({ recipient });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const recipient = await Recipient.findByPk(req.params.id);

      await recipient.destroy();

      return res.json({ message: 'Destroy recipient success' });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default new RecipientController();
