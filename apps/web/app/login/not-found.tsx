import Link from "next/link";

export default function LoginNotFoundPage() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-4">
        The login page you're looking for doesn't exist.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Return Home
      </Link>
    </div>
  );
}
