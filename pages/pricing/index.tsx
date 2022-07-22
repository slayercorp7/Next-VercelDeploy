import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function contactPage() {
  return (
    <MainLayout>
        <h1>pricing Page</h1>
      <h1 className={'title'}>
        ir a <Link href="/"> home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/pricing.js</code>
      </p>
    </MainLayout>
  );
}