
 
import { Button } from "../../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"


const Login = () => {
  return (
    <>
    <div className="flex justify-center ">
     <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome to Login-Page!</CardTitle>
        <CardDescription>Please sign-in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter Your Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Forgot Password</Button>
        <Button>Login</Button>
      </CardFooter>
    </Card>
    </div>
    </>
  );
};

export default Login; // Export the ForgotPassword component
