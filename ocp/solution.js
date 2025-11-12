// Interface genérica (contrato)
class PaymentMethod {
  pay() {
    throw new Error("Método 'pay()' deve ser implementado");
  }
}

// Implementações específicas
class PixPayment extends PaymentMethod {
  pay() {
    console.log("Pagamento via PIX realizado!");
  }
}

class CardPayment extends PaymentMethod {
  pay() {
    console.log("Pagamento via Cartão realizado!");
  }
}

class BoletoPayment extends PaymentMethod {
  pay() {
    console.log("Pagamento via Boleto realizado!");
  }
}

// Classe principal aberta para extensão
class PaymentProcessor {
  process(paymentMethod) {
    paymentMethod.pay();
  }
}

// Uso:
const processor = new PaymentProcessor();

processor.process(new PixPayment());
processor.process(new CardPayment());
processor.process(new BoletoPayment());