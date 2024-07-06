  // components/CustomPrevArrow.js
  const CustomPrevArrow = (props) => {
    const { className, onClick, style } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, display: 'block', left: '10px' }}
      >
        <img src="/images/blue-arrow-left.svg" alt="Previous" style={{ width: '30px', height: '30px' }} />
      </div>
    );
  };
  
  export default CustomPrevArrow;