import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { use, useState } from "react";
import { useRouter } from "next/router";
import { adminLogin } from "../../store/auth/thunk";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";
import { useTranslation } from "react-i18next";
import { Button, Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

function AdminLoginPage() {
  const { t } = useTranslation("common");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(adminLogin({ username, password, router }));
  };

  const { loading } = useSelector((state) => state.auth);

  return (
    <div style={{ maxWidth: 400, margin: "100px auto", padding: 20 }}>
      <h2>Admin Giriş</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 12 }}>
          <Grid item xs={12} sm={6} md={3} p={2}>
            <TextField
              fullWidth
              autoComplete="off"
              size="small"
              id="username"
              name="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} p={2}>
            <TextField
              fullWidth
              size="small"
              autoComplete="off"
              id="password"
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
            />
          </Grid>
        </div>
        {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}
        <Grid item xs={12} sm={6} md={3} px={2} py={1}>
          <LoadingButton
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            loading={loading}
          >
            Giriş Yap
          </LoadingButton>
        </Grid>
      </form>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(AdminLoginPage);
