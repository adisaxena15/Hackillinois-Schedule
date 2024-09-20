import React, {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect,
  } from 'react';
  import cn from 'classnames';
  
  const MouseEnterContext = createContext();
  
  export const CardContainer = ({
    children,
    className,
    containerClassName,
  }) => {
    const containerRef = useRef(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);
  
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
  
    const handleMouseEnter = () => {
      setIsMouseEntered(true);
    };
  
    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      setIsMouseEntered(false);
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
  
    return (
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
        <div
          className={cn(
            'py-5',
            containerClassName
          )}
          style={{
            perspective: '1000px',
          }}
        >
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
              'flex items-center justify-center relative transition-all duration-200 ease-linear',
              className
            )}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {children}
          </div>
        </div>
      </MouseEnterContext.Provider>
    );
  };
  export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
      throw new Error('useMouseEnter must be used within a MouseEnterProvider');
    }
    return context;
  };