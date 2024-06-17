import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { FunilVendas } from '../funil-vendas/funil-vendas.entity';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @ManyToOne(() => FunilVendas, funilVendas => funilVendas.leads)
  funilVendas: FunilVendas;
}
