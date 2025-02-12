"use client"; // Mark this component as a client component

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Using usePathname for routing

export default function RSymbolFix() {
  const pathname = usePathname(); // Get the current pathname

  const applySuperscript = () => {
    document.querySelectorAll("body *").forEach((el) => {
      el.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) { // Only text nodes
          const updatedText = node.nodeValue?.replace(/®/g, '<sup>®</sup>');
          if (updatedText) {
            // Create a temporary element to convert HTML string to nodes
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = updatedText;
            // Replace the original text node with new nodes
            while (tempDiv.firstChild) {
              el.insertBefore(tempDiv.firstChild, node);
            }
            el.removeChild(node); // Remove the original text node
          }
        }
      });
    });
  };

  useEffect(() => {
    // Apply superscript on initial load
    applySuperscript();

    // We are now applying superscript when the pathname changes
  }, [pathname]); // Effect will rerun when the pathname changes

  return null; // No UI, just runs the script
}
