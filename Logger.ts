class Logger {
    readonly project_folder_name: string = "app_server"
    readonly file_path: string
    readonly debug_mode: boolean

    constructor(path: string, debug: boolean = true) {
        let sliceIndex = path.toUpperCase().indexOf(this.project_folder_name.toUpperCase())
        this.file_path = path.slice(sliceIndex + this.project_folder_name.length)
        this.debug_mode = debug
    }

    info(msg: any, func_name: string|null = null) {
        let time = new Date().toUTCString()
        let log = func_name ? (time + " Info: " + this.file_path + " : " + func_name) : (time + " Info: " + this.file_path)

        if (msg instanceof Object) {
            console.log(log, " => ")
            console.log(msg)
        } else {
            console.log(log, " => ", msg)
        }
        console.log();

    }

    debug(msg: any, func_name: string|null = null) {

        if (!this.debug_mode) return

        let time = new Date().toUTCString()
        let log = func_name ? (time + " Debug: " + this.file_path + " : " + func_name) : (time + " Debug: " + this.file_path)

        if (msg instanceof Object) {
            console.log(log, " => ")
            console.log(msg)
        } else {
            console.log(log, " => ", msg)
        }
        console.log();

    }

    error(msg: any, func_name: string|null = null, payload: any = null, payload_title: string|null = null) {

        let time = new Date().toUTCString()
        let log = func_name ? (time + " Error: " + this.file_path + " : " + func_name) : (time + " Error: " + this.file_path)

        if (msg instanceof Object) {
            console.log(log, " => ")
            console.log(msg)
        } else {
            console.log(log, " => ", msg)
        }
        if (payload_title) {
            console.log(payload_title);
            console.log(payload);
        }
        console.log();

    }
}
export default Logger
