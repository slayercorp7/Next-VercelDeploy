import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function aboutPage() {
  return (
    <>
    <h1>about Page</h1>
      <h1 className={"title"}>
          ir a <Link href="/"> home</Link>
        </h1>

        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/index.js</code>
        </p>
    </>
  );
}

aboutPage.getLayout = function getLayout(page: JSX.Element) {

  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
  
}
