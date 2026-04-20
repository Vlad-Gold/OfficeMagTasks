export type Data = {
  id: string;
  label: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
};

export type Connection =
  | { type: "horizontal"; from: string; to: string; arrow?: boolean }
  | { type: "horizontal-reverse"; from: string; to: string; arrow?: boolean }
  | { type: "bus"; from: string; to: string; busX: number; arrow?: boolean }
  | { type: "vertical-group"; from: string; to: string; x: number; arrow?: boolean }
  | { type: "tap"; from: string; to: string; x: number; y?: number; arrow?: boolean }
  | { type: "vertical"; from: string; to: string; arrow?: boolean }
  | { type: "diagonal-up"; from: string; to: string; arrow?: boolean }
  | { type: "diagonal-down"; from: string; to: string; arrow?: boolean };
