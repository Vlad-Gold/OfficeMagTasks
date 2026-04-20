import type { Data } from "../types";
import { NODE_WIDTH, NODE_HEIGHT } from "./nodes";

export const GAP = 20;

export function getNodeCenter(node: Data) {
  return {
    x: node.x + (node.width || NODE_WIDTH) / 2,
    y: node.y + (node.height || NODE_HEIGHT) / 2
  };
}

export function getNodeEdge(node: Data, side: 'left' | 'right' | 'top' | 'bottom') {
  const center = getNodeCenter(node);
  switch (side) {
    case 'left': return { x: node.x, y: center.y };
    case 'right': return { x: node.x + (node.width || NODE_WIDTH), y: center.y };
    case 'top': return { x: center.x, y: node.y };
    case 'bottom': return { x: center.x, y: node.y + (node.height || NODE_HEIGHT) };
  }
}

export function makeLine(x1: number, y1: number, x2: number, y2: number): string {
  if (x1 === x2) return `M ${x1} ${y1} V ${y2}`;
  if (y1 === y2) return `M ${x1} ${y1} H ${x2}`;
  return `M ${x1} ${y1} L ${x2} ${y2}`;
}

export interface Line {
  id: string;
  path: string;
  arrow: boolean;
  arrowDirection: 'forward' | 'reverse';
}
