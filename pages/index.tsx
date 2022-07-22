import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>home Page</h1>
      <h1 className={'title'}>
        ir a <Link href="/about">about</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/about.js</code>
      </p>
    </MainLayout>
  );
}
