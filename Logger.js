
class Logger {
    constructor(path, debug = true) {
        this.formatter = new Intl.DateTimeFormat("en-In", { dateStyle: "medium", timeStyle: "medium", hour12: false });
        this.file_path = debug == true ? path.replace(`${process.cwd()}\\`, "") : "";
        this.debug_mode = debug;
        this.show_file_path = debug;
    }
    log(log_level, msg_title, msg = -Infinity) {
        if (log_level == "Debug")
            if (!this.debug_mode)
                return;
        const time = new Date();
        if (log_level == 'Info') {
            if (msg == -Infinity) {
                console.log(`${log_level} ${this.formatter.format(time)} ${this.file_path}>`, msg_title, "\n");
            }
            else {
                console.log(`${log_level} ${this.formatter.format(time)} ${this.file_path} ${msg_title}>`, msg, "\n");
            }
        }
        else {
            if (msg == -Infinity) {
                console.error(`${log_level} ${this.formatter.format(time)} ${this.file_path}>`, msg_title, "\n");
            }
            else {
                console.error(`${log_level} ${this.formatter.format(time)} ${this.file_path} ${msg_title}>`, msg, "\n");
            }
        }
    }
    info(msg_title, msg = -Infinity) { this.log("Info", msg_title, msg); }
    error(msg_title, msg = -Infinity) { this.log("Error", msg_title, msg); }
    debug(msg_title, msg = -Infinity) { if (this.debug_mode)
        this.log("Debug", msg_title, msg); }
}
export default Logger;