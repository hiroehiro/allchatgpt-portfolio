// components/Introduction.tsx
import { Box, Typography } from "@mui/material";

const Introduction: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">自己紹介</Typography>
      <Typography>
        私はフロントエンドエンジニアとして、5年間の経験があります。JavaScript、React、Next.js、TypeScriptなどの技術を使って、Webアプリケーションの開発に取り組んできました。最近は特に、MUIを用いたデザインに力を入れています。
      </Typography>
    </Box>
  );
};

export default Introduction;
