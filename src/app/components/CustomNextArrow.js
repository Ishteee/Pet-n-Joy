// components/CustomNextArrow.js
const CustomNextArrow = (props) => {
    const { className, onClick, style } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, display: 'block', right: '10px', color: 'black', backgroundColor: 'black'}}
      >
        <img src="" alt="Next" style={{ width: '0px', height: '0px', color: 'black'}} />
      </div>
    );
  };
  
  export default CustomNextArrow;
  

  