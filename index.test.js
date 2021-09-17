const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it("should add .test", async () => {
  await run(".a{ color:#fff }", ".test .a{ color:#fff }", {});
});

it("should remove width", async () => {
  await run(".a{ width:100px }", "", {});
});

it("should remove width receive color", async () => {
  await run(".a{ width:100px; color:#fff }", ".test .a{ color:#fff }", {});
});

it("should remove width receive border-color", async () => {
  await run(
    ".a{ width:100px; border-color:#fff }",
    ".test .a{ border-color:#fff }",
    {}
  );
});

it("should remove width receive background-color", async () => {
  await run(
    ".a{ width:100px; background-color:#fff }",
    ".test .a{ background-color:#fff }",
    {}
  );
});

it("should @media remove all", async () => {
  await run(
    `@media (max-width: 1120px) {
      .detail-area {
        display: none;
      }
    }`,
    "",
    {}
  );
});

it("should @media work", async () => {
  await run(
    `@media (max-width: 1120px) {
      .detail-area {
        color: #ccc;
      }
    }`,
    `@media (max-width: 1120px) {
      .test .detail-area {
        color: #ccc;
      }
    }`,
    {}
  );
});
