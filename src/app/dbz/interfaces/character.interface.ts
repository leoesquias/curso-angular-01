import { v4 as uuid } from 'uuid';

export interface ICharacter{
  id?:string;
  nombre:string;
  poder:number;
  procedencia:string;
}
