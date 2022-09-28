/// <reference types="cypress" />

import EnderecoPage from "../support/page-objects/endereco.page";

describe("Funcionalidade Endereços - Faturamento e Entrega", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it.only("Deve fazer cadastro de faturamento com sucesso", () => {
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
});
