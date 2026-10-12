import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <Card>
        <p className="text-sm text-foreground/60">
          {title} content will appear here.
        </p>
      </Card>
    </>
  );
}