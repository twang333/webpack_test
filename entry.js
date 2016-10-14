require("./style.css");
document.write("It works11.");
require("bundle!./content.js")(function(fileJsExports) {
    document.write(fileJsExports);
});
