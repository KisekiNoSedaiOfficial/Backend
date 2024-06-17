import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FunilVendas } from './funil-vendas.entity';
import { Empresa } from '../empresa/empresa.entity';

@Injectable()
export class FunilVendasService {
  constructor(
    @InjectRepository(FunilVendas)
    private funilVendasRepository: Repository<Empresa>,
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  findAll(): Promise<FunilVendas[]> {
    return this.funilVendasRepository.find({ relations: ['funisVendas', 'cliente'] });
  }

  async create(funilVendas: FunilVendas, clienteId: number): Promise<FunilVendas> {
    const cliente = await this.clienteRepository.findOne({ where: { id: clienteId }, relations: ['empresas'] });
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    funilVendas.nome = cliente;
    return this.funilVendasRepository.save(empresa);
  }

  async remove(id: number): Promise<void> {
    await this.empresaRepository.delete(id);
  }
}
