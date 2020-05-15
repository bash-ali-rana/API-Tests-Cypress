describe("Test HTTP GET Method", () => {
  it("verifies GET method status code 200", () => {
    cy.request({
      method: "GET",
      url: "/get",
    }).then((resp) => {
      expect(resp.status).equal(200, "expecting status code should equal 200");
    });
  });

  it("verifies GET method response body", () => {
    cy.request({
      method: "GET",
      url: "/get",
    }).then((resp) => {
      expect(resp.body.url).to.exist;
    });
  });
});
