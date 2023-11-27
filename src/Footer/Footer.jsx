export default function Footer({ children }) {
  let regularDiv = {
    backgroundColor: "#3c3c3c",
    //borderTop: "1px solid white",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
  };
  let wrapperDiv = {
    display: "block",
    padding: "40px",
    height: "80px",
    width: "100%",
  };
  return (
    <div>
      <div style={wrapperDiv} />
      <div style={regularDiv}>SEEKER by Daniel Aybar Tornero</div>
    </div>
  );
}
