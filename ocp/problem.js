//Classe precisa ser aberta sempre que é usada uma nova forma de pagamento, violando o OCP
class PaymentProcessor {
  pay(type) {
    if (type === "pix") {
      console.log("Pagamento via PIX realizado!");
    } else if (type === "cartao") {
      console.log("Pagamento via Cartão realizado!");
    } else if (type === "boleto") {
      console.log("Pagamento via Boleto realizado!");
    } else {
      console.log("Tipo de pagamento não suportado.");
    }
  }
}

// Uso:
const processor = new PaymentProcessor();
processor.pay("pix");
processor.pay("cartao");