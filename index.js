function isEmpty(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

const hasColorProp = (colorProps, declProp) =>
  colorProps.some((prop) => declProp.includes(prop));

module.exports = (opts = {}) => {
  // Work with options here

  if (!opts.colorProps) {
    opts.colorProps = [
      "color",
      "background",
      "border",
      "border",
      "box-shadow",
      "stroke",
    ];
  }

  let theme;

  return (root) => {
    const file = root.source.input.file || "";

    const matched = file.match(
      /(?<theme>[a-zA-Z0-9]+)-theme.(less|css|scss|sass)/
    );
    if (matched && matched.groups.theme !== "default") {
      theme = matched.groups.theme;
    } else {
      if (process.env.NODE_ENV == "test") {
        theme = "test";
      }
    }
    if (theme) {
      root.walkRules((rule) => {
        rule.walkDecls((decl) => {
          if (!hasColorProp(opts.colorProps, decl.prop)) {
            decl.remove();
          }
        });

        if (isEmpty(rule.nodes)) {
          rule.remove();
        } else {
          rule.selector = rule.selector
            .replace(/\n/g, "")
            .split(",")
            .map((s) => `.${theme} ${s}`)
            .join(",\n");
        }
      });
    }
  };
};
module.exports.postcss = true;
