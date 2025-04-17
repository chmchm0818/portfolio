import { keyframes } from "@mui/system";
import { styled } from "@mui/material";

// アニメーション定義
const scrollAnim = keyframes`
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
`;

// スタイル付きコンポーネント
const AnimatedLine = styled("span")({
  width: "1px",
  height: "80px",
  backgroundColor: "black",
  display: "block",
  animation: `${scrollAnim} 2s infinite ease-in-out`,
});

export default function ScrollIndicator() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: "10px",
        transform: "translateX(-50%)",
      }}
    >
      <AnimatedLine />
    </div>
  );
}
