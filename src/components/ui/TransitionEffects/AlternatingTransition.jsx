/*
 * Componente que alterna entre diferentes transiciones
 * • Cambia automáticamente entre las transiciones disponibles
 * • Mantiene el estado de cuál transición usar siguiente
 * • Proporciona la misma interfaz que los componentes individuales
 */
import React, { useState } from "react";
import SmokeTransition from "./SmokeTransition";
import EnergyTransition from "./EnergyTransition";
import FireTransition from "./FireTransition";
import NebulaTransition from "./NebulaTransition";
import ThunderstormTransition from "./ThunderstormTransition";

const AlternatingTransition = ({
  isActive,
  onPhaseChange,
  onTransitionComplete,
  children,
}) => {
  // Estado para alternar entre las 5 transiciones (0: Smoke, 1: Energy, 2: Fire, 3: Nebula, 4: Thunderstorm)
  const [currentTransition, setCurrentTransition] = useState(0);

  const handleTransitionComplete = () => {
    // Ciclar entre las 5 transiciones
    const nextTransition = (currentTransition + 1) % 5;
    console.log(
      `Cambiando transición: ${currentTransition} -> ${nextTransition}`
    );
    setCurrentTransition(nextTransition);

    // Llamar al callback original
    onTransitionComplete && onTransitionComplete();
  };

  // Array con los componentes de transición
  const transitionComponents = [
    SmokeTransition,
    EnergyTransition,
    FireTransition,
    NebulaTransition,
    ThunderstormTransition,
  ];
  const transitionNames = ["Smoke", "Energy", "Fire", "Nebula", "Thunderstorm"];
  const TransitionComponent = transitionComponents[currentTransition];

  console.log(
    `Renderizando transición: ${transitionNames[currentTransition]} (index: ${currentTransition})`
  );

  return (
    <TransitionComponent
      isActive={isActive}
      onPhaseChange={onPhaseChange}
      onTransitionComplete={handleTransitionComplete}
    >
      {children}
    </TransitionComponent>
  );
};

export default AlternatingTransition;
