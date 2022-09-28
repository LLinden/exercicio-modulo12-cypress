/// <reference types="cypress" />

import EnderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require("../fixtures/endereco.json");

describe("Funcionalidade Endereços - Faturamento e Entrega", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it("Deve fazer cadastro de faturamento com sucesso", () => {
    EnderecoPage.editarEnderecoFaturamento(
      "Teste",
      "Sobrenome",
      "Ebac",
      "Brasil",
      "Av. Brasil",
      "123",
      "Taquara",
      "Rio Grande do Sul",
      "95600-000",
      "99999999",
      "email@dominio.com"
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso."
    );
  });

  it.only("Deve fazer cadastro de faturamento com sucesso usando arquivo de dados", () => {
    EnderecoPage.editarEnderecoFaturamento(
      dadosEndereco[1].nome,
      dadosEndereco[1].sobrenome,
      dadosEndereco[1].empresa,
      dadosEndereco[1].pais,
      dadosEndereco[1].endereco,
      dadosEndereco[1].numero,
      dadosEndereco[1].cidade,
      dadosEndereco[1].estado,
      dadosEndereco[1].cep,
      dadosEndereco[1].telefone,
      dadosEndereco[1].email
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso."
    );
  });
});
