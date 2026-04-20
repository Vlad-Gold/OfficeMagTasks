import Diagram from "./components/Diagram";

export default function App() {
  return (
    <div
      style={{
        background: "#2f3640",
        minHeight: "100vh",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Diagram />
      </div>
    </div>
  );
}