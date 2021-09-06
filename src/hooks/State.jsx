import React, { useState } from "react";

// export const State = () => {
//   const [color, setColor] = useState("crimson");
//   return (
//     <h1
//       onClick={() => {
//         if (color === "crimson") {
//           setColor("limegreen");
//         } else {
//           setColor("crimson");
//         }
//       }}
//       style={{ color: color }}
//     >
//       Use State Example
//     </h1>
//   );
// };

//the below approach is more correct since there are less chances of the bugs

export const State = () => {
  const [isGreen, setIsGreen] = useState(true);
  return (
    <h1
      onClick={() => {
        setIsGreen(!isGreen);
      }}
      style={{ color: isGreen ? "limegreen" : "crimson" }}
    >
      Use State Example
    </h1>
  );
};
