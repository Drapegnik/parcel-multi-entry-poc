const limits = {
    'main': '102 B',
    'second': '61 B',
    'legacy': '63 B',
};

module.exports = Object.entries(limits).map(([name, limit]) => ({
    name,
    path: `./dist/${name}.js`,
    limit
}));