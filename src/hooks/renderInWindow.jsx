import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const RenderInWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);

  useEffect(() => {
    // Create container element on client-side
    setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    // When container is ready
    if (container) {
      // Create window
      newWindow.current = window.open(props.link, "", "width=600,height=400,left=200,top=200");
      // Append container
      newWindow.current.document.body.appendChild(container);

      // Save reference to window for cleanup
      const curWindow = newWindow.current;

      // Return cleanup function
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};

export default RenderInWindow;
