import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @OneToMany(() => Empresa, empresa => empresa.cliente, { cascade: true })
  empresas: Empresa[];
}
