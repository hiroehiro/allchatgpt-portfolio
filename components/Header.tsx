import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" onClick={() => handleClick("/")}>
          ホームページ
        </Button>
        <Button color="inherit" onClick={() => handleClick("/blog")}>
          ブログページ
        </Button>
        <Button color="inherit" onClick={() => handleClick("/contact")}>
          コンタクトページ
        </Button>
        <Button color="inherit" onClick={() => handleClick("/others")}>
          その他ページ
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
