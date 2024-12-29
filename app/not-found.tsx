import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-8xl">404</h2>
        <p className="text-lg">Page not Found</p>
        <Link href="/">Return Home</Link>
      </div>
    </>
  );
}

export default NotFoundPage;