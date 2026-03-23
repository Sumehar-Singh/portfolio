const si = require('react-icons/si');
const keys = Object.keys(si);
const queries = ['vscode', 'postman', 'firebase', 'mongo', 'mysql', 'postgres', 'express', 'tailwind', 'json', 'jwt', 'cplusplus', 'javascript'];
queries.forEach(q => {
  console.log(q, ':', keys.filter(k => k.toLowerCase().includes(q)));
});
