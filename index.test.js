const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it("add .test", async () => {
  await run(".a{ color:#fff }", ".test .a{ color:#fff }", {});
});

it("add remove width", async () => {
  await run(".a{ width:100px }", "", {});
});

it("add remove width receive color", async () => {
  await run(".a{ width:100px; color:#fff }", ".test .a{ color:#fff }", {});
});

it("add remove width receive border-color", async () => {
  await run(
    ".a{ width:100px; border-color:#fff }",
    ".test .a{ border-color:#fff }",
    {}
  );
});

it("add remove width receive background-color", async () => {
  await run(
    ".a{ width:100px; background-color:#fff }",
    ".test .a{ background-color:#fff }",
    {}
  );
});
