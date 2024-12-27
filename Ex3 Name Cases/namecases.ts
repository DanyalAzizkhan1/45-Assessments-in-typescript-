let personName: string ="Danyal"
console.log("lowercase", personName.toLowerCase());
console.log("upercase:", personName.toUpperCase())
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()))

