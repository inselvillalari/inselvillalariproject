import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const LanguageSwitcher = (classname) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const router = useRouter();
  const { pathname, query, asPath } = router;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lng) => {
    setAnchorEl(null);
    if (lng) {
      if (i18n?.changeLanguage) {
        i18n.changeLanguage(lng);
        window.location.reload();
      }
      router.push({ pathname, query }, asPath, { locale: lng });
    }
  };

  return (
    <div className={classname}>
      <IconButton
        disableRipple
        disableFocusRipple
        onClick={handleClick}
        color="inherit"
        sx={{
          "&:focus": { outline: "none", boxShadow: "none" },
          "&:focus-visible": { outline: "none", boxShadow: "none" },
        }}
      >
        <LanguageIcon />
      </IconButton>

      <Menu
        disableScrollLock
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
      >
        <MenuItem onClick={() => handleClose("tr")}>
          <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
            <span style={{ fontSize: 20 }} class="fi fi-tr"></span>
          </ListItemIcon>
          <ListItemText primary="Türkçe" />
        </MenuItem>

        <MenuItem onClick={() => handleClose("en")}>
          <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
            <span style={{ fontSize: 20 }} class="fi fi-gb"></span>
          </ListItemIcon>
          <ListItemText primary="English" />
        </MenuItem>

        <MenuItem onClick={() => handleClose("ru")}>
          <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
            <span style={{ fontSize: 20 }} class="fi fi-ru"></span>
          </ListItemIcon>
          <ListItemText primary="Русский" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
