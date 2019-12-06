import { CommandNotification } from './commandNotification.model'

export class CommandResult{
    constructor(success: boolean, message: string, data: CommandNotification[]) {
        this.success = success
        this.message = message
        this.data = data
    }
    public success: boolean
    public message: string
    public data: CommandNotification[]
}
