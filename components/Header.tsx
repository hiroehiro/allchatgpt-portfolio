// components/Header.tsx
import { AppBar, Button, Toolbar } from "@mui/material";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Button color="inherit">ポートフォリオ</Button>
        </Link>
        <Link href="/blog">
          <Button color="inherit">ブログ</Button>
        </Link>
        <Link href="/contact">
          <Button color="inherit">コンタクト</Button>
        </Link>
        <Link href="/other">
          <Button color="inherit">その他</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
