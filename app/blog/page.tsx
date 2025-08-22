import Link from "next/link";
import { Star } from "lucide-react";
import team from "@/public/team.jpg";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";

export default function BlogPage() {

  return (
    <div className="">
      {/* Hero Section */}
      <PageHeader
        title="Academy News & Success Stories"
        description="Stay updated with the latest news, achievements, and inspiring success stories from HISS Football Club Academy."
        backgroundImage={team.src}
      >
        <Badge variant="secondary" className="mb-4">
          <Star className="mr-1 h-3 w-3" />
          News & Updates
        </Badge>
      </PageHeader>

      <div className="text-center py-8 bg-linear-to-r/increasing from-yellow-500 to-blue-950">
        <h1 className="pb-2">COMING SOON .........</h1>

        <Link href="/"> Back to Home Page</Link>
      </div>
   
    </div>
  );
}
