import React from "react";
import style from "./index.module.scss";

function ButtonGroup({
  buttons,
  isSelected,
  setIsSelected,
}: {
  buttons: any;
  isSelected: any;
  setIsSelected: any;
}) {
  return (
    <div className={style.container}>
      <h2>Select Floor</h2><div className={style.line}></div>

      {buttons.map(
        (
          button:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | Promise<React.AwaitedReactNode>
            | null
            | undefined,
          index: React.Key | null | undefined
        ) => (
          <button
            className={`${style.button} ${
              isSelected === index ? style.selected : style.unselected
            }`}
            onClick={() => setIsSelected(index)}
            key={index}
          >
            {/* */}
            <p>{button}</p>
          </button>
        )
      )}
    </div>
  );
}

export default ButtonGroup;
