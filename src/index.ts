export class Log {

    static success(msg: string) {
        console.log(`%c ${msg}`, `color:white;background:green`)
    }

    static danger(msg: string) {
        console.log(`%c ${msg}`, `color:white;background:red`)
    }

    static info(msg: string) {
        console.log(`%c ${msg}`, `color:black;background:yellow`)
    }
}