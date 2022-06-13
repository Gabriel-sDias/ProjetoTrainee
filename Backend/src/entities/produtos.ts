import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('produtos')
export class produtos{
    @PrimaryColumn()
    id: string;

    
    @Column()
    name: string;


    @Column()
    valor: number;

    @Column()
    quantidade: number;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}