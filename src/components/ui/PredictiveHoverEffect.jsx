/*
 * Efecto de hover predictivo para grids
 * • Detecta movimiento del mouse sobre elementos
 * • Aplica efectos visuales anticipando interacciones
 * • Mejora la experiencia de usuario en selecciones
 * • Wrapper que envuelve elementos interactivos
 */
import React, { useState, useRef, useEffect } from "react";
import "./PredictiveHoverEffect.css";
import "./AvatarGridSelector.css";

const PredictiveHoverEffect = ({ children }) => {
  const containerRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [itemRefs, setItemRefs] = useState([]);

  useEffect(() => {
    // Creo referencias para cada elemento hijo
    const refs = React.Children.map(children, () => React.createRef());
    setItemRefs(refs);
  }, [children]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const getBackgroundForItem = (index) => {
    if (!itemRefs[index] || !itemRefs[index].current) return "transparent";
    const itemRect = itemRefs[index].current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const itemCenterX = itemRect.left + itemRect.width / 2 - containerRect.left;
    const itemCenterY = itemRect.top + itemRect.height / 2 - containerRect.top;
    const distance = Math.sqrt(
      Math.pow(mousePos.x - itemCenterX, 2) +
        Math.pow(mousePos.y - itemCenterY, 2)
    );
    const maxDistance = Math.sqrt(
      Math.pow(itemRect.width / 2, 2) + Math.pow(itemRect.height / 2, 2)
    );
    const intensity = Math.max(0, 1 - distance / maxDistance);
    if (intensity > 0) {
      const relativeX = ((mousePos.x - itemRect.left) / itemRect.width) * 100;
      const relativeY = ((mousePos.y - itemRect.top) / itemRect.height) * 100;
      return `radial-gradient(circle at ${relativeX}% ${relativeY}%, rgba(229, 57, 53, ${
        intensity * 0.7
      }) 0%, transparent 80%)`;
    }
    return "transparent";
  };

  return (
    <div
      ref={containerRef}
      className="predictive-hover-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, (child, index) => {
        const background = getBackgroundForItem(index);
        return React.cloneElement(child, {
          key: child.key || index,
          ref: itemRefs[index],
          style: {
            ...child.props.style,
            background:
              background !== "transparent"
                ? background
                : child.props.style?.background || "transparent",
          },
        });
      })}
    </div>
  );
};

export default PredictiveHoverEffect;
