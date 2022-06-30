export function background(node, { duration = 1000, delay = 0 }) {
    return {
        duration,
        delay,
        css: (t) => {
            return `
                background-color: rgb(31 35 72 /${Math.min(t / 2, 0.2)})`;
        },
    };
}