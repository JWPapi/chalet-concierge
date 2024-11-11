import { useState, useRef, useEffect } from 'react';

export function usePopupState({
  hoverDelay = 500,
  minDisplayTime = 3000,
  cooldownTime = 30000
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  
  const hoverTimeoutRef = useRef(null);
  const minDisplayTimeoutRef = useRef(null);
  const cooldownTimeoutRef = useRef(null);

  const showPopup = () => {
    if (cooldownTimeoutRef.current) return;
    
    hoverTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      setLastInteractionTime(Date.now());
      
      minDisplayTimeoutRef.current = setTimeout(() => {
        minDisplayTimeoutRef.current = null;
      }, minDisplayTime);
    }, hoverDelay);
  };

  const hidePopup = () => {
    if (minDisplayTimeoutRef.current) return;
    
    setIsVisible(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    cooldownTimeoutRef.current = setTimeout(() => {
      cooldownTimeoutRef.current = null;
    }, cooldownTime);
  };

  const handleInteraction = () => {
    setHasInteracted(true);
    setLastInteractionTime(Date.now());
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (minDisplayTimeoutRef.current) clearTimeout(minDisplayTimeoutRef.current);
      if (cooldownTimeoutRef.current) clearTimeout(cooldownTimeoutRef.current);
    };
  }, []);

  return {
    isVisible,
    showPopup,
    hidePopup,
    handleInteraction,
    hasInteracted,
    lastInteractionTime
  };
}
