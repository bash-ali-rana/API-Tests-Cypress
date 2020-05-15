describe("Test HTTP DELETE Method", () => {
    it("verifies DELETE method status code 200", () => {
      cy.request({
        method: "DELETE",
        url: "/delete",
      }).then((resp) => {
        expect(resp.status).equal(200, "expecting status code should equal 200");
      });
    });
  
    it("verifies DELETE method response body", () => {
      cy.request({
        method: "DELETE",
        url: "/delete",
        body: {
          TEST: "Hello World!",
        }
      }).then((resp) => {
        expect(resp.body.json.TEST).to.eq("Hello World!");
      });
    });
  });
  