// components/Skills.tsx
import { Box, Typography } from "@mui/material";

const Skills: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">スキルセット</Typography>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>MUI</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </Box>
  );
};

export default Skills;
