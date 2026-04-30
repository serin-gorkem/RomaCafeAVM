import { notFound } from "next/navigation";
import MenuCategoryPage from "@/components/menu/MenuCategoryPage";
import { menuCategories } from "@/data/menuCategories";
import { menuPages } from "@/data/menuPages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return menuCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = menuPages[slug as keyof typeof menuPages];

  if (!page) {
    return {
      title: "Menu | Cafe Roma",
    };
  }

  return {
    title: `${page.title} | Cafe Roma`,
    description: page.subtitle,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = menuPages[slug as keyof typeof menuPages];

  if (!page) {
    notFound();
  }

  return <MenuCategoryPage page={page} />;
}