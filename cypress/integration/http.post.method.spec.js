describe("Test HTTP POST Method", () => {
  it("verifies POST method status code 200", () => {
    cy.request({
      method: "POST",
      url: "/post",
    }).then((resp) => {
      expect(resp.status).equal(200, "expecting status code should equal 200");
    });
  });

  it("verifies POST method response body", () => {
    cy.request({
      method: "POST",
      url: "/post",
      body: {
        TEST: "Hello World!",
      }
    }).then((resp) => {
      expect(resp.body.json.TEST).to.eq("Hello World!");
    });
  });
});
