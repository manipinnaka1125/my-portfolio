import React from "react";

function LifecycleCard() {
  return (
    <div style={styles.cardContainer}>
      <h2 style={styles.cardTitle}>Product Lifecycle</h2>
      <div style={styles.stagesContainer}>
        <div style={styles.stage}>
          <div style={styles.stageIcon}>💻</div>
          <h3 style={styles.stageTitle}>Code</h3>
        </div>
        <div style={styles.stage}>
          <div style={styles.stageIcon}>🔄</div>
          <h3 style={styles.stageTitle}>Push</h3>
        </div>
        <div style={styles.stage}>
          <div style={styles.stageIcon}>🔀</div>
          <h3 style={styles.stageTitle}>Merge</h3>
        </div>
        <div style={styles.stage}>
          <div style={styles.stageIcon}>🚀</div>
          <h3 style={styles.stageTitle}>Deploy</h3>
        </div>
      </div>
    </div>
  );
}

// Internal CSS styles for the card with a solid background color
const styles = {
  cardContainer: {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "", 
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "1.5em",
    color: "#333",
    marginBottom: "20px",
  },
  stagesContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  stage: {
    flex: "1 1 20%",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "transparent", 
    // Solid background color
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    textAlign: "center",
  },
  stageIcon: {
    fontSize: "2em",
    marginBottom: "10px",
  },
  stageTitle: {
    fontSize: "1.2em",
    color: "#333",
  },
};

export default LifecycleCard;
