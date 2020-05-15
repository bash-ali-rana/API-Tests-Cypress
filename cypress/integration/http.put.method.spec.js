describe("Test HTTP PUT Method", () => {
  it("verifies PUT method status code 200", () => {
    cy.request({
      method: "PUT",
      url: "/put",
    }).then((resp) => {
      expect(resp.status).equal(200, "expecting status code should equal 200");
    });
  });

  it("verifies PUT method response body", () => {
    cy.request({
      method: "PUT",
      url: "/put",
      body: {
        TEST: "Hello World!",
      }
    }).then((resp) => {
      expect(resp.body.json.TEST).to.eq("Hello World!");
    });
  });
});
