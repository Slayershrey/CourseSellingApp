import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Card, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../config.js"
import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { userState } from "../store/atoms/user.js"
import Link from "@mui/material/Link"

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const setUser = useSetRecoilState(userState)

  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          style={{ width: 850, height: 550, marginTop: 30 }}
          src={"/21.png"}
          alt="Logo"
        />

        <div
          style={{
            marginTop: 150,
          }}
        >
          {" "}
          <Typography
            style={{ display: "flex", justifyContent: "center" }}
            variant={"h6"}
          >
            Welcome. Sign Up below
          </Typography>
          <br></br>
          <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
            <TextField
              onChange={(evant11) => {
                let elemt = evant11.target
                setEmail(elemt.value)
              }}
              fullWidth={true}
              label="Email"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              fullWidth={true}
              label="Password"
              variant="outlined"
              type={"password"}
            />
            <br />
            <br />
            <Button
              size={"large"}
              variant="contained"
              onClick={async () => {
                const res = await axios.post(
                  `${BASE_URL}/admin/signup`,
                  {
                    username: email,
                    password: password,
                  },
                  {
                    headers: {
                      "Content-type": "application/json",
                    },
                  }
                )
                const data = res.data

                localStorage.setItem("token", data.token)
                // window.location = "/"
                setUser({
                  userEmail: email,
                  isLoading: false,
                })
                navigate("/")
              }}
            >
              {" "}
              SignUp
            </Button>
            <br />
            <br />
            Already have an account?{" "}
            <Link
              style={{ fontWeight: "bold" }}
              component="button"
              variant="body2"
              onClick={() => {
                navigate("/signin")
              }}
            >
              Login
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Signup
