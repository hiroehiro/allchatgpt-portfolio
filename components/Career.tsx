// components/Career.tsx
import { Box, Typography } from "@mui/material";

const Career: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">職歴</Typography>
      <Typography variant="h6">ABC株式会社（2018年〜現在）</Typography>
      <Typography>
        フロントエンドエンジニアとして、Webアプリケーションの開発に従事。
      </Typography>
      <Typography variant="h6">
        DEF株式会社Webデザイナーとして、企業のWebサイトのデザイン制作に従事。
      </Typography>
    </Box>
  );
};

export default Career;
