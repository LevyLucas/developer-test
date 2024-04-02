import CollectionTop from "@/app/components/content/collections/CollectionTop";
import Separator from "@/app/components/utils/Separator";
import CollectionBottom from "@/app/components/content/collections/CollectionBottom";

export default function CollectionPage() {
  return (
    <div className="container mt-8">
      <CollectionTop />
      <Separator />
      <CollectionBottom />
    </div>
  );
}
