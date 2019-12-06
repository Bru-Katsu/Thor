export class CommandNotification{
    constructor(property: string, message: string) {
        this.Property = property
        this.Message = message
    }
    public Property: string
    public Message: string
}
