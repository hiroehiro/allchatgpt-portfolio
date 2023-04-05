// pages/index.tsx
import { Box, Typography, Button } from "@mui/material";
import Header from "../components/Header";
import SkillIcon from "../components/SkillIcon";
import Grid from "@mui/material/Grid";
import { faJsSquare, faPython } from "@fortawesome/free-brands-svg-icons";

const skills = [
  {
    name: "JavaScript",
    level: 3,
    icon: faJsSquare,
  },
  {
    name: "Python",
    level: 3,
    icon: faPython,
  },
  // 他のスキル
];

const IndexPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 64px)", // ヘッダーの高さを考慮して計算
          backgroundImage: `url('/bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          Hello, World!
        </Typography>
        <Typography variant="h4" sx={{ mb: 4 }}>
          私のポートフォリオへようこそ
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button variant="contained" color="primary">
            ポートフォリオページへ
          </Button>
          <Button variant="contained" color="secondary">
            ブログページへ
          </Button>
        </Box>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          自己紹介
        </Typography>
        <Typography>
          私は〇〇県出身の〇〇です。現在はWebエンジニアとして活躍しています。
        </Typography>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          スキルセット
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <SkillIcon
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          職歴
        </Typography>
        <Typography>
          〇〇株式会社 （2019年4月〜現在）
          <br />
          Webエンジニアとして、フロントエンド開発に従事。
        </Typography>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          お問い合わせ
        </Typography>
        <Typography>お問い合わせはこちらからお願いいたします。</Typography>
      </Box>
    </>
  );
};

export default IndexPage;
