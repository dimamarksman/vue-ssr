import titleMixin from "./title";

process.env.VUE_ENV === "server" ? runServerTest() : runClientTest();

function runServerTest() {
  test("server title mixin should expose 'created' hook", () => {
    expect(typeof titleMixin.created === "function").toBe(true);
  });
}

function runClientTest() {
  test("client title mixin should expose 'mounted' hook", () => {
    expect(typeof titleMixin.mounted === "function").toBe(true);
  });
}
