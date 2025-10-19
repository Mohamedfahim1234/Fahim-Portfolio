const CyberGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="cyber-grid w-full h-full opacity-30" />
      <div className="scan-line" />
    </div>
  );
};

export default CyberGrid;
