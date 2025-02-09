export interface Numbers {
  id?: string;
  initialValue: number;
  multiples: Multiples[];
}

export interface Multiples {
  number: number;
  multiple?: number[];
}
