# PostCSS Multiple Themes

[PostCSS] plugin for generate themes css.

[postcss]: https://github.com/postcss/postcss

work with webpack

pick the color props and add prefix class name

default choose `["color", "background", "border", "box-shadow", "stroke"]`

## add file name to js

default-theme.less
dark-theme.less

### JS

```js
import "./default-theme.less";
import "./dark-theme.less";
```

### component.less

```
.box{
  width: 100px;
  height: 100px;
  border: 1px solid @border;
  background-color: @bg;
  color: @color;
}
```

### default-theme.less

```
@import "./component";

@border: #333;
@color: #000;
@bg: #fff;
```

### dark-theme.less

```
@import "./component";

@border: #999;
@color: #fff;
@bg: #000;
```

### output css

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #333;
  background-color: #fff;
  color: #000;
}
.dark .box {
  border: 1px solid #999;
  background-color: #000;
  color: @fff;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-multiple-themes
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-multiple-themes'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
