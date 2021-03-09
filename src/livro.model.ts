import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Livro extends Model<Livro> {

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    preco: number;

    // constructor(codigo: string, nome: string, preco: number){
    //     this.codigo = codigo;
    //     this.nome = nome;
    //     this.preco = preco;
    // }
}