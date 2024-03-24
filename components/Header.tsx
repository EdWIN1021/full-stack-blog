"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";

//next auth
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

// ui
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  ButtonBase,
  InputBase,
  Button,
} from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SignIn = dynamic(() => import("./SignIn"), {
  ssr: false,
});

const SignUp = dynamic(() => import("./SignUp"), {
  ssr: false,
});

const pages = ["Write", "Notifications"];

function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [isSignIn, toggleSignIn] = React.useState(false);
  const [isSignUp, toggleSignUp] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Hamburger */}
            <Box className="flex md:hidden">
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo */}
            <div className="flex flex-1 justify-center md:flex-none">
              <Link
                className="bg-black px-6 py-2 text-xl mr-2 font-bold text-white whitespace-nowrap text-center"
                href={"/"}
              >
                BLOG
              </Link>
            </div>

            {pathname === "/" && (
              <Box className="rounded-full px-3 py-2 bg-[#F9F9F9] md:flex items-center gap-2 ml-4 hidden">
                <SearchOutlinedIcon className="text-[grey]" />
                <InputBase className="" type="text" placeholder="Search" />
              </Box>
            )}

            {/* links */}
            <Box className="hidden md:flex flex-1 justify-end mr-3 space-x-3 items-center">
              {session?.user && (
                <>
                  {pathname === "/write" ? (
                    <Button
                      size="small"
                      color="secondary"
                      variant="contained"
                      onClick={() => router.push("/summary")}
                    >
                      Publish
                    </Button>
                  ) : (
                    <ButtonBase
                      className="flex gap-2 items-center py-1 px-2"
                      onClick={() => router.push("/write")}
                    >
                      <EditCalendarOutlinedIcon className="text-[grey]" />
                      <span className="text-base text-[grey]">Write</span>
                    </ButtonBase>
                  )}

                  <IconButton size="large">
                    <NotificationsNoneOutlinedIcon fontSize="inherit" />
                  </IconButton>
                </>
              )}
            </Box>

            {/* settings */}
            <Box>
              <Tooltip title="Open settings">
                <IconButton size="large" onClick={handleOpenUserMenu}>
                  <AccountCircleOutlinedIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
              <Menu
                className="mt-[45px]"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {session?.user ? (
                  <div>
                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                      }}
                    >
                      <Typography>Profile</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        signOut();
                        handleCloseUserMenu();
                      }}
                    >
                      <Typography>Logout</Typography>
                    </MenuItem>
                  </div>
                ) : (
                  <div>
                    <MenuItem
                      onClick={() => {
                        toggleSignIn((open) => !open);
                        handleCloseUserMenu();
                      }}
                    >
                      <Typography>Signin</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        toggleSignUp((open) => !open);
                        handleCloseUserMenu();
                      }}
                    >
                      <Typography>Signup</Typography>
                    </MenuItem>
                  </div>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {isSignIn && (
        <SignIn
          isSignIn={isSignIn}
          toggleSignIn={toggleSignIn}
          toggleSignUp={toggleSignUp}
        />
      )}

      <SignUp
        isSignUp={isSignUp}
        toggleSignUp={toggleSignUp}
        toggleSignIn={toggleSignIn}
      />
    </>
  );
}
export default Header;
