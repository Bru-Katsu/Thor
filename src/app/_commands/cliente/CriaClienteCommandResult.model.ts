export class CriaClienteCommandResult {
    constructor(guid: string, nome: string) {
        this.Id = guid
        this.Nome = nome
    }
    public Id: string
    public Nome: string
}
