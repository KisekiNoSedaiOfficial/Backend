import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';
import { Cliente } from '../cliente/cliente.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  findAll(): Promise<Empresa[]> {
    return this.empresaRepository.find({ relations: ['funisVendas', 'cliente'] });
  }

  async create(empresa: Empresa, clienteId: number): Promise<Empresa> {
    const cliente = await this.clienteRepository.findOne({ where: { id: clienteId }, relations: ['empresas'] });
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    empresa.cliente = cliente;
    return this.empresaRepository.save(empresa);
  }

  async remove(id: number): Promise<void> {
    await this.empresaRepository.delete(id);
  }
}
