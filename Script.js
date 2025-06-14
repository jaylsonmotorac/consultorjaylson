document.getElementById('loan-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var name = document.getElementById('name').value;
  var address = document.getElementById('address').value;
  var cpf = document.getElementById('cpf').value;
  var amount = parseFloat(document.getElementById('amount').value);
  var months = parseInt(document.getElementById('months').value);

  var monthlyInterestRate = 0.18;
  var monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
  var totalPayment = monthlyPayment * months;
  var totalInterest = totalPayment - amount;
  var daysUntilFirstPayment = 30;

  document.getElementById('results').classList.remove('hidden');
  document.getElementById('monthly-payment').innerHTML = 'Valor da Parcela: R$ ' + monthlyPayment.toFixed(2);
  document.getElementById('total-payment').innerHTML = 'Total das Parcelas: R$ ' + totalPayment.toFixed(2);
  document.getElementById('amount-simulated').innerHTML = 'Valor Simulado: R$ ' + amount.toFixed(2);
  document.getElementById('months-simulated').innerHTML = 'Prazo: ' + months + ' parcelas';
  document.getElementById('interest-rate').innerHTML = 'Taxa de Juros: ' + (monthlyInterestRate * 100).toFixed(2) + '% a.m.';
  document.getElementById('days-until-first-payment').innerHTML = 'Dias até a primeira parcela: ' + daysUntilFirstPayment;
  document.getElementById('total-interest').innerHTML = 'Total dos Juros: R$ ' + totalInterest.toFixed(2);

  localStorage.setItem('clientName', name);
  localStorage.setItem('clientAddress', address);
  localStorage.setItem('clientCPF', cpf);
});

document.getElementById('send-whatsapp').addEventListener('click', function() {
  var name = localStorage.getItem('clientName');
  var address = localStorage.getItem('clientAddress');
  var cpf = localStorage.getItem('clientCPF');
  var amountSimulated = document.getElementById('amount-simulated').innerText;
  var monthsSimulated = document.getElementById('months-simulated').innerText;
  var monthlyPayment = document.getElementById('monthly-payment').innerText;
  var interestRate = document.getElementById('interest-rate').innerText;
  var daysUntilFirstPayment = document.getElementById('days-until-first-payment').innerText;
  var totalInterest = document.getElementById('total-interest').innerText;

  var message = "Nome: " + name + "%0A" +
                "Endereço: " + address + "%0A" +
                "CPF: " + cpf + "%0A" +
                "Valor Simulado: " + amountSimulated.substring(15) + "%0A" +
                "Prazo: " + monthsSimulated.substring(7) + "%0A" +
                "Valor da Parcela: " + monthlyPayment.substring(20) + "%0A" +
                "Taxa de Juros: " + interestRate.substring(15) + "%0A" +
                "Dias até a primeira parcela: " + daysUntilFirstPayment.substring(27) + "%0A" +
                "Total dos Juros: " + totalInterest.substring(16);

  window.open("https://wa.me/?text=" + message);
});
function enviarParaWhatsApp() {
  // Obtenha os valores dos campos do formulário
  var nome = document.getElementById('name').value;
  var endereco = document.getElementById('address').value;
  var cpf = document.getElementById('cpf').value;
  var valorEmprestimo = document.getElementById('amount').value;
  var parcelas = document.getElementById('months').value;

  // Construa a mensagem para enviar para o WhatsApp
  var mensagem = "Nome: " + nome + "\n";
  mensagem += "Endereço: " + endereco + "\n";
  mensagem += "CPF: " + cpf + "\n";
  mensagem += "Valor do Empréstimo: " + valorEmprestimo + "\n";
  mensagem += "Parcelas: " + parcelas + "\n";

  // Encode a mensagem para URL
  var mensagemEncoded = encodeURIComponent(mensagem);

  // Construa o link do WhatsApp com a mensagem
  var linkWhatsApp = "https://wa.me/message/AA34OUJP2EICK1?text=" + mensagemEncoded;

  // Abra o link no WhatsApp
  window.open(linkWhatsApp);
                                              }
