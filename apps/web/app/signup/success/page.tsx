import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";

export default function SignupSuccessPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-10">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Check Your Email</CardTitle>
          <CardDescription>We've sent you a verification link</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex justify-center mb-4">
            <Mail className="h-12 w-12 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground mb-4">
            Please check your email inbox and click the verification link to
            complete your registration. If you don't see the email, please check
            your spam folder.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button asChild className="w-full">
            <Link href="/login">Continue to Login</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
