class Logger {
    readonly project_folder_name: string = "Logger"
    readonly file_path: string
    readonly debug_mode: boolean

    constructor(path: string, debug: boolean = true) {
        let sliceIndex = path.toUpperCase().indexOf(this.project_folder_name.toUpperCase())
        this.file_path = path.slice(sliceIndex + this.project_folder_name.length)
        this.debug_mode = debug
    }

    private log(log_level: string, msg: any, msg_title: any | null = null) {
        const time = new Date()
        const formatter = new Intl.DateTimeFormat("en-In", { dateStyle: "medium", timeStyle: "medium", hour12: false })
        let log = formatter.format(time) + " " + log_level + ": " + this.file_path
        console.log(log, msg_title ? msg_title : "", " => ", msg)
        console.log();
    }

    info(msg: any, msg_title: any | null = null) { this.log("Info", msg, msg_title) }
    error(msg: any, msg_title: any | null = null) { this.log("Error", msg, msg_title) }
    debug(msg: any, msg_title: any | null = null) {
        if (!this.debug_mode) return
        this.log("Debug", msg, msg_title)
    }
}
export default Logger
