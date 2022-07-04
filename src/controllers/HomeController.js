import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Claudiene',
      sobrenome: 'Silva Sousa',
      email: 'claudiene@gmail.com',
      idade: 22,
      peso: 58,
      altura: 1.68,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
