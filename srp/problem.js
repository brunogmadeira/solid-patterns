//SALVAR USUARIO SEM UTILIZAR O METODO SRP

class UserController {
  saveUser(user) {
    if (!user.email) {
      throw new Error("Email obrigatório");
    }

    console.log("Salvando usuário no banco...");

    console.log(`Enviando e-mail de boas-vindas para ${user.email}`);
  }
}

const controller = new UserController();
controller.saveUser({ name: "Bruno", email: "bruno@email.com" });
