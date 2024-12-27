var personName = "Danyal";
console.log("lowercase", personName.toLowerCase());
console.log("upercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
