export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  imagem?: string; // Adicione esta linha
  categoria: {
    id_categoria: number;
    nome_categoria: string;
  };
  estoque?: {
    id_estoque: number;
    quantidade: number;
  };
}