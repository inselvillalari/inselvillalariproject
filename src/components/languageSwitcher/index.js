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
import { useTranslation } from "next-i18next";
import Flag from "react-world-flags";

const LanguageSwitcher = (classname) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation();
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
        // window.location.reload();
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
          <ListItemIcon sx={{ minWidth: 30 }}>
            <Flag code="TR" style={{ width: 25, height: 18, borderRadius: 2 }} />
          </ListItemIcon>
          <ListItemText primary="Türkçe" />
        </MenuItem>

        <MenuItem onClick={() => handleClose("en")}>
          <ListItemIcon sx={{ minWidth: 30 }}>
            <Flag code="GB" style={{ width: 25, height: 18, borderRadius: 2 }} />
          </ListItemIcon>
          <ListItemText primary="English" />
        </MenuItem>

        <MenuItem onClick={() => handleClose("ru")}>
          <ListItemIcon sx={{ minWidth: 30 }}>
            <Flag code="RU" style={{ width: 25, height: 18, borderRadius: 2 }} />
          </ListItemIcon>
          <ListItemText primary="Русский" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
