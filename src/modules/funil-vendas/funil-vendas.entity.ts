import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { Lead } from '../leads/leads.entity';

@Entity()
export class FunilVendas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Empresa, empresa => empresa.funisVendas)
  empresa: Empresa;

  @OneToMany(() => Lead, lead => lead.funilVendas)
  leads: Lead[];
}
