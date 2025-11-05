//SALVANDO USUARIO UTILIZANDO O METODO SRP (UTILIZANDO CONTROLLER, SERVICE E REPOSITORY)

class UserService {
  constructor(userRepository, emailService) {
    this.userRepository = userRepository;
    this.emailService = emailService;
  }

  saveUser(user) {
    if (!user.email) {
      throw new Error("Email obrigatório");
    }

    this.userRepository.save(user);
    this.emailService.sendWelcomeEmail(user);
  }
}

class UserRepository {
  save(user) {
    console.log("Salvando usuário no banco...");
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    console.log(`Enviando e-mail de boas-vindas para ${user.email}`);
  }
}

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  handleSaveRequest(reqBody) {
    this.userService.saveUser(reqBody);
    console.log("Usuário salvo com sucesso!");
  }
}

const repo = new UserRepository();
const email = new EmailService();
const service = new UserService(repo, email);
const controller = new UserController(service);

controller.handleSaveRequest({ name: "Bruno", email: "bruno@email.com" });
