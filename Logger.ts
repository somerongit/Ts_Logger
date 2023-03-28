class Logger {
    readonly project_folder_name: string = "Ts_Logger"
    readonly file_path: string
    readonly debug_mode: boolean
    private formatter: any = new Intl.DateTimeFormat("en-In", { dateStyle: "medium", timeStyle: "medium", hour12: false })

    constructor(path: string, debug: boolean = true) {
        let sliceIndex = path.toUpperCase().indexOf(this.project_folder_name.toUpperCase())
        this.file_path = path.slice(sliceIndex + this.project_folder_name.length)
        this.debug_mode = debug
    }

    private log(log_level: string, msg_title: any, msg: any | null = null) {
        if (log_level == "Debug") if (!this.debug_mode) return

        const time = new Date()
        if (msg) {
            console.log(log_level, this.formatter.format(time), this.file_path, msg_title, " => ", msg, "\n")
        } else {
            console.log(log_level, this.formatter.format(time), this.file_path, " => ", msg_title, "\n")
        }
    }

    info(msg_title: any, msg: any | null = null) { this.log("Info", msg_title, msg) }
    error(msg_title: any, msg: any | null = null) { this.log("Error", msg_title, msg) }
    debug(msg_title: any, msg: any | null = null) { if (this.debug_mode) this.log("Debug", msg_title, msg) }
}
export default Logger