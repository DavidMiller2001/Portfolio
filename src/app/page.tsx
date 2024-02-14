import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function HomePage() {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Trash</CardTitle>
          <CardDescription className="flex gap-2">
            <Badge>
              <Link href="https://nextjs.org" target="none">
                NextJs
              </Link>
            </Badge>
            <Badge>
              <Link href="https://prisma.io" target="none">
                Prisma
              </Link>
            </Badge>
            <Badge>
              <Link href="https://planetscale.com" target="none">
                Planetscale
              </Link>
            </Badge>
            <Badge>
              <Link href="https://trpc.io" target="none">
                tRPC
              </Link>
            </Badge>
            <Badge>
              <Link href="https://tailwindcss.com" target="none">
                tailwindcss
              </Link>
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-around">
            <div className="flex-1">
              <p>
                This project is an X style social media app made in NextJs. I
                used tailwindcss for styling because I like how quickly I am
                able to move while editing in the same file. The site is hosted
                using Vercel at{" "}
                <Link
                  href="https://trash-swart.vercel.app"
                  className="text-purple-600 underline"
                  target="none"
                >
                  Trash
                </Link>
                . The project is set-up with{" "}
                <Link
                  href="http://create.t3.gg"
                  className="text-purple-600 underline"
                  target="none"
                >
                  create-t3-app
                </Link>{" "}
                to save a lot of the headache from setting up the different
                services used such as tRPC, prisma, etc.
              </p>
            </div>
            <div className="flex-1 bg-blue-200">Image</div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="https://github.com/DavidMiller2001/trash" target="none">
            View Code
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
