import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';
import { FunilVendas } from '../funil-vendas/funil-vendas.entity';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Cliente, cliente => cliente.empresas)
  cliente: Cliente;

  @OneToMany(() => FunilVendas, funilVendas => funilVendas.empresa)
  funisVendas: FunilVendas[];
}
