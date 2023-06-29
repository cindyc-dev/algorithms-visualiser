import React, { useRef, useState } from "react";

export default function Node() {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const element = nodeRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      setOffset({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y - 25;
    setPosition({ x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="App"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        ref={nodeRef}
        className={`circle ${isDragging ? "dragging" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
}
