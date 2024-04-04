"use client"

import { UserAuth } from "@context/AuthContext";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { color } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//@ts-ignore
const signIn = () => {

  const router = useRouter();
  const { user, signIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    await signIn(email, password);
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      if (user) {
        router.push('/');
      }
    };
    checkAuthentication();
  }, [user]);

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h5"
          component="h5"
          align="center"
          margin={2}
        >
          Sign In
        </Typography>

        <Stack spacing={2} sx={{ backgroundColor: 'white' }}>
          <form onSubmit={handleSignIn}>

            <TextField
              fullWidth
              label="Email"
              id="email"
              type='email'
              //@ts-ignore
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              id="password"
              type='password'
              //@ts-ignore
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">Sign in</Button>

          </form>
        </Stack>
        New User? <Link href={"/auth/signup"}>Sign Up</Link>
      </Container>
    </div>
  );
};

export default signIn;
