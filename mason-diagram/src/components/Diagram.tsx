import type { CSSProperties } from "react";
import styles from "./Diagram.module.css";
import { nodes } from "./nodes";
import { generateLines } from "./lines";

export default function Diagram() {
  const lines = generateLines();

  return (
    <div className={styles.diagramContainer}>
      <h1 className={styles.title}>Масоны Самсона</h1>
      {nodes.map((node) => (
        <div
          key={node.id}
          className={styles.node}
          style={{
            left: node.x,
            top: node.y,
            width: node.width,
            height: node.height,
          }}
        >
          {node.label}
        </div>
      ))}
      <svg className={styles.svgOverlay}>
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M1,1 L7,4 L1,7" fill="none" stroke="#aaa" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" />
          </marker>
          <marker
            id="arrow-reverse"
            markerWidth="8"
            markerHeight="8"
            refX="1"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M7,1 L1,4 L7,7" fill="none" stroke="#aaa" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" />
          </marker>
        </defs>
        {lines.map((line) => {
          const markerStyle: CSSProperties = {};
          if (line.arrow) {
            if (line.arrowDirection === 'reverse') {
              markerStyle.markerStart = 'url(#arrow-reverse)';
            } else {
              markerStyle.markerEnd = 'url(#arrow)';
            }
          }
          return (
            <path
              key={line.id}
              d={line.path}
              className={styles.line}
              style={markerStyle}
            />
          );
        })}
      </svg>
    </div>
  );
}