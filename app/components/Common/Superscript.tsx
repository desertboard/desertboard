"use client";
import React, { useEffect } from "react";

const Superscript = () => {


    useEffect(() => {
      document.querySelectorAll("body *").forEach((el) => {
        el.childNodes.forEach((node) => {
          if (node.nodeType === 3) { // Only text nodes
            // Replace ® with the <sup> version
            console.log("useeffect calledddddd");
            const updatedText = node.nodeValue?.replace(/®/g, '<sup>®</sup>');
            // Create a temporary element to convert HTML string to nodes
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = updatedText || '';
            // Replace the original text node with new nodes
            while (tempDiv.firstChild) {
              el.insertBefore(tempDiv.firstChild, node);
            }
            el.removeChild(node); // Remove the original text node
          }
        });
      });


    }, []);

  return (
    <>

    </>
  );
};

export default Superscript;
