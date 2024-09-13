class Cursor {
    constructor(default_cursor = "default") {
        this.size_x = 150;
        this.size_y = 150;
        this.image = undefined;
        this.set_cursor(default_cursor);
    }

    set_cursor(cursor) {
        if (typeof document !== 'undefined') {
            // Browser environment
            if (typeof cursor == "object") {
                document.body.style.cursor = "none";
                this.image = cursor;
            } else {
                document.body.style.cursor = cursor;
                this.image = undefined;
            }
        } else {
            // Node.js environment
            console.log(`Cursor set to: ${cursor}`);
            this.image = cursor;
        }
    }
}
if (typeof window == 'undefined') {
    module.exports = Cursor;
}