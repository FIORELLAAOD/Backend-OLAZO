import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Decorador que indica que es una entidad de la base de datos
export class Usuario {
    @PrimaryGeneratedColumn() // Columna que se autogenera como ID
    id: number;

    @Column() // Columna que representa un campo de la base de datos
    nombre: string;

    @Column() // Columna para almacenar el email
    email: string;
}
